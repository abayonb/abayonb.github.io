import express from 'express';
import proxy from 'express-http-proxy';
import compression from 'compression';

const app = express();

const args = process.argv
  .slice(2)
  .reduce((prev, curr) => Object.assign(prev, {[curr.split('=')[0].replace('--', '')]: curr.split('=')[1]}), {});

const COUNTRY = args.country || 'uk';
const PROXY_SERVER = args.proxy || 'https://user-proxy.dev.envs.lookiero.tech/';
const STATIC_DIR_PATH = `${process.cwd()}/build_multisite-dev/${COUNTRY}/`;

app.use(compression());
app.use('/api', (req, res, next) => {
  req.url = `/api${req.url}`; // don't know why but it removes de /api so put it again
  return proxy(PROXY_SERVER)(req, res, next);
});

app.get('/*', express.static(STATIC_DIR_PATH));

app.listen(1234, () => {
  console.log('You can pass args like: --country=es --proxy=https://my-sever.com\n\n');
  console.log('serving: ', STATIC_DIR_PATH);
  console.log('proxing to: ', PROXY_SERVER);
  console.log(`reverse proxy server started on port 1234`);
});
