import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {useIntl} from '@i18n';

import {isHomeRoute, isNoIndexRoute} from '@app/Router';
import {SEO} from '@bridges';
import {getSiteLocale} from '@core/site/application';

import {determineContent, determineTitlePage} from './modules';

const {domain, language, meta} = getSiteLocale();
const PATH_TO_FAVICONS = `${process.env.REACT_APP_ASSETS_COMMONS_PATH}/favicon`;
const PATH_TO_SHARE_IMAGE = `${process.env.REACT_APP_ASSETS_PATH}/images/share/lookiero.jpg`;

const SEOManager = ({path = ''}) => {
  const {formatMessage} = useIntl();
  const [titlePage, setTitlePage] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    const content = determineContent(path);
    const title = determineTitlePage(formatMessage, content);
    setContent(content);
    setTitlePage(title);
  }, [formatMessage, path]);

  const hrefPath = `${domain}${path}`;
  const noIndex = isNoIndexRoute(path);

  return (
    <SEO htmlAttributes={{lang: language}}>
      <meta charSet="utf-8" />
      <title>{titlePage}</title>
      <meta name="description" content={formatMessage({id: `head.description.${content}`})} />
      <meta name="organization" content={formatMessage({id: 'head.organization'})} />
      <meta property="og:title" content={titlePage} />
      <meta property="og:description" content={formatMessage({id: 'head.og.description'})} />
      <meta property="og:image" content={PATH_TO_SHARE_IMAGE} />
      <meta property="og:image:secure_url" content={PATH_TO_SHARE_IMAGE} />
      <meta property="og:url" content={formatMessage({id: 'head.og.url'})} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={formatMessage({id: 'head.og.siteName'})} />
      <meta property="og:locale" content={formatMessage({id: 'head.og.locale'})} />
      <meta property="fb:app_id" content={formatMessage({id: 'head.fb.appId'})} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={formatMessage({id: `head.description.${content}`})} />
      <meta name="twitter:title" content={formatMessage({id: `head.title.${content}`})} />
      <meta name="twitter:creator" content={formatMessage({id: 'head.twitter'})} />
      <meta name="twitter:site" content={formatMessage({id: 'head.twitter'})} />
      <meta name="google-site-verification" content={process.env.REACT_APP_GOOGLE_SITE_ID} />
      <link rel="canonical" href={hrefPath} />
      {meta(path).map(({hrefLang, url}) => (
        <link key={url} rel="alternate" hrefLang={hrefLang} href={url} />
      ))}
      <link rel="apple-touch-icon" sizes="192x192" href={`${PATH_TO_FAVICONS}/xxxhdpi_192×192.png`} />
      <link rel="icon" type="image/png" sizes="48x48" href={`${PATH_TO_FAVICONS}/mdpi_48×48.png`} />
      <link rel="icon" type="image/png" sizes="72x72" href={`${PATH_TO_FAVICONS}/hdpi_72×72.png`} />
      <link rel="mask-icon" href={`${PATH_TO_FAVICONS}/xxxhdpi_192×192.png`} color="#5BBAD5" />
      <link rel="shortcut icon" href={`${PATH_TO_FAVICONS}/favicon.ico`} />
      <meta name="msapplication-TileColor" content="#DA532C" />
      {noIndex && <meta name="robots" content="noindex" />}
      <body className={isHomeRoute(path) ? 'home-page' : 'internal-page'} />
    </SEO>
  );
};

SEOManager.propTypes = {
  content: PropTypes.string,
  path: PropTypes.string,
};

export {SEOManager};
