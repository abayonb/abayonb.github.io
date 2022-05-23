import '@lookiero/mendel-web-client';
import {emitUserEvent} from '@lookiero/user-tracking-front';
import {getSiteLocale} from '@core/site/application';
import {isSeoRender} from '@core/seo/application';
import {prefix, defaultVariantsForExperiment, mendelConfigData, forcedVariants} from './config';

const MATCH_MOBILE = /^Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i;

if (!isSeoRender) {
  const Mendel = window.Mendel;
  const MendelConfig = window.MendelConfig;

  const mendel = new Mendel();
  mendel.setApiHost(process.env.REACT_APP_API_MENDEL);
  const mendelConfig = new MendelConfig(prefix, defaultVariantsForExperiment, mendelConfigData, forcedVariants, mendel);

  const {site} = getSiteLocale();
  const userAgent = navigator.userAgent.toLowerCase();
  const mobile = Boolean(userAgent.match(MATCH_MOBILE));
  const scope = `store=${site}&registered=false&device=${mobile ? 'Mobile' : 'Desktop'}`;

  const forcedVariant = mendelConfig.getForcedVariant();

  mendel.getExperimentsForUser(mendelConfig.prefix, '', scope, forcedVariant).then(experiments => {
    console.log('Mendel cargado', experiments);
    experiments.map(({experiment, variant}) => {
      emitUserEvent({
        event: 'experimentApplied',
        eventCategory: 'experiment',
        eventLabel: experiment,
        eventAction: variant,
      });
    });
  });
}
