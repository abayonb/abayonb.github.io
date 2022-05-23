import esbuild from 'esbuild';
import fs from 'fs-extra';
import glob from 'glob';
import Handlebars from 'handlebars';
import path from 'path';
import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import {buildConfig, getEnvConfiguration} from './config/generateConfig.js';

const buildSubTemplates = (files, config) => {
  const subTemplates = {};
  files.forEach(file => {
    const fileKey = file.split('/').pop().replace('.handlebars', '');
    const fileTemplate = Handlebars.compile(fs.readFileSync(file).toString());
    subTemplates[fileKey] = fileTemplate(config);
  });
  return subTemplates;
};

const buildMinifiedStyles = async mode => {
  return await new Promise(resolve => {
    gulp
      .src(['src/home/css/index.css', 'src/home/**/*.css'])
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(concat(`styles.min.css`))
      .pipe(gulp.dest(`build_multisite-${mode}/styles`))
      .on('end', () => resolve(fs.readFileSync(`build_multisite-${mode}/styles/styles.min.css`)));
  });
};

const buildScripts = async mode => {
  try {
    const envConfig = await getEnvConfiguration(mode);
    const environmentConfig = Object.keys(envConfig).reduce(
      (prev, curr) => Object.assign(prev, {[`process.env.${curr}`]: `'${envConfig[curr]}'`}),
      {},
    );

    await esbuild.build({
      bundle: true,
      entryPoints: ['src/home/js/index.js'],
      minify: true,
      outfile: 'public/temp/lookiero.js',
      target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
      define: environmentConfig,
    });
    return fs.readFileSync('public/temp/lookiero.js').toString();
  } catch (e) {
    console.error('ERROR generating JS build');
    throw e;
  }
};

const registerPartials = () => {
  const files = glob.sync('src/home/views/partials/*.handlebars');
  files.forEach(file => {
    Handlebars.registerPartial(file.split('/').pop().replace('.handlebars', ''), fs.readFileSync(file).toString());
  });
};

const TPL_REGEX = /(?<={)(.*)(?=})/g; // matches {myKey}
const INNER_KEY = /(?<=\[{)(.*)(?=}])/g; // matches [{myKey}]
const getTranslateFunction = (config, country) => (key, options) => {
  const tpl = config[country].translations[key];
  if (!tpl) {
    console.error(`Key [${key}] not found in translations for [${country}]`);
    return '';
  }
  const match = tpl.match(TPL_REGEX);
  if (!match) {
    return tpl;
  }
  // si tenemos una clave que contenga subclave tenemos que manipularla, por ejemplo si hay links dentro del texto
  // por ejemplo si tenemos una cadena de texto tal que así: `click {here} for more info`
  // el {here} se traduciría como <a href="">this link</a>
  // así que lo que se hace en el template es primero guardar la variable usando el setTranslationVar y el nombre de
  // la variable del propio texto, por ejemplo: {{setTranslationVar here <a href="">[{this.link.key}]</a>}} usando
  // los separadores [{}] para la clave.D espués cuando recibimos la traducción de localise si contiene algo entre
  // llaves (en este caso el {here}) hay que cambiarlo por el contenido que hay en el translatioNVar => this.link.key
  const variable = match[0];
  const value = options.data.root[country].translations[variable];
  try {
    const innerKey = value.match(INNER_KEY)[0];
    const translatedValue = value.replace(`[{${innerKey}}]`, options.data.root[country].translations[innerKey]);

    return tpl.replace(`{${variable}}`, translatedValue);
  } catch (e) {
    console.warn(`Cannot find key for ${key}`);
    return '';
  }
};

export const buildIndex = async ({mode = 'dev', countries} = {}) => {
  const config = await buildConfig(mode);
  // const countries = Object.keys(fileNameByLocale);
  const indexContent = fs.readFileSync(path.join(process.cwd(), 'src', 'home', 'index.handlebars')).toString();
  const files = glob.sync('src/home/*.handlebars').filter(f => !f.endsWith('index.handlebars'));
  registerPartials();
  const minifyCssContent = await buildMinifiedStyles(mode);
  const jsContent = await buildScripts(mode);

  Handlebars.registerHelper('concat', (...rest) => rest.filter(r => typeof r === 'string').join(''));
  countries.forEach(country => {
    Handlebars.registerHelper('setTranslationVar', (variable, value, options) => {
      options.data.root[country].translations[variable] = value;
    });
    Handlebars.registerHelper('translate', getTranslateFunction(config, country));
    Handlebars.registerHelper('getGlobalConfig', () => JSON.stringify(config[country].config));
    Handlebars.registerHelper('getCountryConfig', key => config[country].config[key]);
    Handlebars.registerHelper('getCountryDomain', () => config[country].domain);
    Handlebars.registerHelper('isInCountry', list => list && country.match(list));
    const template = Handlebars.compile(indexContent);
    Object.assign(config, buildSubTemplates(files, config));
    const destinationDir = `build_multisite-${mode}/${country}`;
    fs.ensureDirSync(destinationDir);
    fs.ensureDirSync(`${destinationDir}/static/css`);
    fs.ensureDirSync(`${destinationDir}/static/js`);
    fs.writeFileSync(`${destinationDir}/index.html`, template(config));
    fs.writeFileSync(`${destinationDir}/static/css/styles.${config.buildVersionHash}.css`, minifyCssContent);
    fs.writeFileSync(`${destinationDir}/static/js/lookiero.${config.buildVersionHash}.js`, jsContent);
    console.log(`Done writting index for "${country.toUpperCase()}" at "${destinationDir}"`);
  });
  fs.ensureDirSync(`build_multisite-${mode}/styles`);
  fs.removeSync(`build_multisite-${mode}/styles`);
};
/*
 * Descomentar esta sección para trabajar en local con el script, pasando la lista de países 
 * como parte del objeto de config en la llamada a buildIndex
 * @example buildIndex({mode: 'dev', countries: ['es', 'pt']})
 */
// const start = new Date().getTime();
// buildIndex({mode: 'dev'})
//   .then(() => console.log('Done in ' + (new Date().getTime() - start) + 'ms'))
//   .catch(console.error);
