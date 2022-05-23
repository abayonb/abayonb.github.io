# MOTIVATION

The idea of this is to generate the home page using just Vanilla JS.

For that we have templates in order to translate texts, put environment variables, etc...

These files get compiled in `scripts/buildIndex/buildIndex.js`

### Translations

You can translate texts by using in your handlebars file: `{{translate "my.localise.key"}}`

## DEVELOPMENT

from root folder run `node scripts/buildIndex/buildIndex.js`, this will generate a folder structure in root:
`build_multisite-dev/es/index.html` (es/, fr/, uk/...) you can just open index.html in your browser as a static file or
you can open it in a server by running `yarn start:proxy` which will open a server at http://localhost:1234.
