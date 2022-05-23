import {IMAGES_URL} from '../../config';

const ASSET_URL = `${IMAGES_URL}/brands`;

const getBrandsDefinition = devicePath => ({
  VILA: {
    name: 'Vila',
    image: {
      src: `${ASSET_URL}/${devicePath}/vila.png`,
      srcSet: `${ASSET_URL}/${devicePath}/vila.png 1x, ${ASSET_URL}/${devicePath}/vila_2x.png 2x`,
    },
  },
  ONLY: {
    name: 'Only',
    image: {
      src: `${ASSET_URL}/${devicePath}/Only.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Only.png 1x, ${ASSET_URL}/${devicePath}/Only_2x.png 2x`,
    },
  },
  ICHI: {
    name: 'Ichi',
    image: {
      src: `${ASSET_URL}/${devicePath}/ICHI.png`,
      srcSet: `${ASSET_URL}/${devicePath}/ICHI.png 1x, ${ASSET_URL}/${devicePath}/ICHI_2x.png 2x`,
    },
  },
  VERO_MODA: {
    name: 'Vero moda',
    image: {
      src: `${ASSET_URL}/${devicePath}/Vero_moda.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Vero_moda.png 1x, ${ASSET_URL}/${devicePath}/Vero_moda_2x.png 2x`,
    },
  },
  GRACE_MILA: {
    name: 'Grace&Mila',
    image: {
      src: `${ASSET_URL}/${devicePath}/Grace&Mila.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Grace&Mila.png 1x, ${ASSET_URL}/${devicePath}/Grace&Mila_2x.png 2x`,
    },
  },
  NAF_NAF: {
    name: 'NAFNAF',
    image: {
      src: `${ASSET_URL}/${devicePath}/NAFNAF.png`,
      srcSet: `${ASSET_URL}/${devicePath}/NAFNAF.png 1x, ${ASSET_URL}/${devicePath}/NAFNAF_2x.png 2x`,
    },
  },
  SCOTCH_SODA: {
    name: 'SCOTCH&SODA',
    image: {
      src: `${ASSET_URL}/${devicePath}/SCOTCH_SODA.png`,
      srcSet: `${ASSET_URL}/${devicePath}/SCOTCH_SODA.png 1x, ${ASSET_URL}/${devicePath}/SCOTCH_SODA_2x.png 2x`,
    },
  },
  IKKS: {
    name: 'IKKS',
    image: {
      src: `${ASSET_URL}/${devicePath}/IKKS.png`,
      srcSet: `${ASSET_URL}/${devicePath}/IKKS.png 1x, ${ASSET_URL}/${devicePath}/IKKS_2x.png 2x`,
    },
  },
  DIXIE: {
    name: 'Dixie',
    image: {
      src: `${ASSET_URL}/${devicePath}/Dixie.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Dixie.png 1x, ${ASSET_URL}/${devicePath}/Dixie_2x.png 2x`,
    },
  },
  JOULES: {
    name: 'Joules',
    image: {
      src: `${ASSET_URL}/${devicePath}/joules.png`,
      srcSet: `${ASSET_URL}/${devicePath}/joules.png 1x, ${ASSET_URL}/${devicePath}/joules_2x.png 2x`,
    },
  },
  CARMAKOMA: {
    name: 'Carmakoma',
    image: {
      src: `${ASSET_URL}/${devicePath}/Carmakoma.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Carmakoma.png 1x, ${ASSET_URL}/${devicePath}/Carmakoma_2x.png 2x`,
    },
  },
  ESPRIT: {
    name: 'Esprit',
    image: {
      src: `${ASSET_URL}/${devicePath}/esprit.png`,
      srcSet: `${ASSET_URL}/${devicePath}/esprit.png 1x, ${ASSET_URL}/${devicePath}/esprit_2x.png 2x`,
    },
  },
  MOSS_COPENHAGEN: {
    name: 'Moss Copenhagen',
    image: {
      src: `${ASSET_URL}/${devicePath}/Moss_Copenhagen.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Moss_Copenhagen.png 1x, ${ASSET_URL}/${devicePath}/Moss_Copenhagen_2x.png 2x`,
    },
  },
  TIFFOSI: {
    name: 'Tiffosi',
    image: {
      src: `${ASSET_URL}/${devicePath}/tiffosi.png`,
      srcSet: `${ASSET_URL}/${devicePath}/tiffosi.png 1x, ${ASSET_URL}/${devicePath}/tiffosi_2x.png 2x`,
    },
  },
  LEE: {
    name: 'Lee',
    image: {
      src: `${ASSET_URL}/${devicePath}/lee.png`,
      srcSet: `${ASSET_URL}/${devicePath}/lee.png 1x, ${ASSET_URL}/${devicePath}/lee_2x.png 2x`,
    },
  },
  FRENCH_CONNECTION: {
    name: 'French Connection',
    image: {
      src: `${ASSET_URL}/${devicePath}/frenchconnection.png`,
      srcSet: `${ASSET_URL}/${devicePath}/frenchconnection.png 1x, ${ASSET_URL}/${devicePath}/frenchconnection_2x.png 2x`,
    },
  },
  PIECES: {
    name: 'Pieces',
    image: {
      src: `${ASSET_URL}/${devicePath}/pieces.png`,
      srcSet: `${ASSET_URL}/${devicePath}/pieces.png 1x, ${ASSET_URL}/${devicePath}/pieces_2x.png 2x`,
    },
  },
  FATFACE: {
    name: 'FATFACE',
    image: {
      src: `${ASSET_URL}/${devicePath}/FF.png`,
      srcSet: `${ASSET_URL}/${devicePath}/FF.png 1x, ${ASSET_URL}/${devicePath}/FF_2x.png 2x`,
    },
  },
  STREET_ONE: {
    name: 'Street one',
    image: {
      src: `${ASSET_URL}/${devicePath}/street_one.png`,
      srcSet: `${ASSET_URL}/${devicePath}/street_one.png 1x, ${ASSET_URL}/${devicePath}/street_one_2x.png 2x`,
    },
  },
  SOFT_REBELS: {
    name: 'Soft Rebels',
    image: {
      src: `${ASSET_URL}/${devicePath}/SOFT_REBELS.png`,
      srcSet: `${ASSET_URL}/${devicePath}/SOFT_REBELS.png 1x, ${ASSET_URL}/${devicePath}/SOFT_REBELS_2x.png 2x`,
    },
  },
  CKS: {
    name: 'CKS',
    image: {
      src: `${ASSET_URL}/${devicePath}/CKS.png`,
      srcSet: `${ASSET_URL}/${devicePath}/CKS.png 1x, ${ASSET_URL}/${devicePath}/CKS_2x.png 2x`,
    },
  },
  GARCIA_JEANS: {
    name: 'Garcia jeans',
    image: {
      src: `${ASSET_URL}/${devicePath}/garcia.png`,
      srcSet: `${ASSET_URL}/${devicePath}/garcia.png 1x, ${ASSET_URL}/${devicePath}/garcia_2x.png 2x`,
    },
  },
  B_YOUNG: {
    name: 'Byoung',
    image: {
      src: `${ASSET_URL}/${devicePath}/byoung.png`,
      srcSet: `${ASSET_URL}/${devicePath}/byoung.png 1x, ${ASSET_URL}/${devicePath}/byoung_2x.png 2x`,
    },
  },
  FREEQUENT: {
    name: 'Freequent',
    image: {
      src: `${ASSET_URL}/${devicePath}/freequent.png`,
      srcSet: `${ASSET_URL}/${devicePath}/freequent.png 1x, ${ASSET_URL}/${devicePath}/freequent_2x.png 2x`,
    },
  },
  JUNAROSE: {
    name: 'JUNAROSE',
    image: {
      src: `${ASSET_URL}/${devicePath}/Junarose.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Junarose.png 1x, ${ASSET_URL}/${devicePath}/Junarose_2x.png 2x`,
    },
  },
  SILVIAN_HEACH: {
    name: 'Silvian Heach',
    image: {
      src: `${ASSET_URL}/${devicePath}/Silvian_Heach.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Silvian_Heach.png 1x, ${ASSET_URL}/${devicePath}/Silvian_Heach_2x.png 2x`,
    },
  },
  SOAKEDINLUXURY: {
    name: 'Soakedinluxury',
    image: {
      src: `${ASSET_URL}/${devicePath}/soakedinluxury.png`,
      srcSet: `${ASSET_URL}/${devicePath}/soakedinluxury.png 1x, ${ASSET_URL}/${devicePath}/soakedinluxury_2x.png 2x`,
    },
  },
  HOBBS: {
    name: 'Hobbs',
    image: {
      src: `${ASSET_URL}/${devicePath}/Hobbs.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Hobbs.png 1x, ${ASSET_URL}/${devicePath}/Hobbs@2x.png 2x`,
    },
  },
  WHISTLES: {
    name: 'Whistles',
    image: {
      src: `${ASSET_URL}/${devicePath}/Whistles.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Whistles.png 1x, ${ASSET_URL}/${devicePath}/Whistles@2x.png 2x`,
    },
  },
  REPLAY: {
    name: 'Replay',
    image: {
      src: `${ASSET_URL}/${devicePath}/Replay.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Replay.png 1x, ${ASSET_URL}/${devicePath}/Replay@2x.png 2x`,
    },
  },
  BROADWAY: {
    name: 'Broadway',
    image: {
      src: `${ASSET_URL}/${devicePath}/Broadway.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Broadway.png 1x, ${ASSET_URL}/${devicePath}/Broadway@2x.png 2x`,
    },
  },
  CECIL: {
    name: 'Cecil',
    image: {
      src: `${ASSET_URL}/${devicePath}/Cecil.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Cecil.png 1x, ${ASSET_URL}/${devicePath}/Cecil@2x.png 2x`,
    },
  },
  TOMTAILOR: {
    name: 'Tomtailor',
    image: {
      src: `${ASSET_URL}/${devicePath}/Tomtailor.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Tomtailor.png 1x, ${ASSET_URL}/${devicePath}/Tomtailor@2x.png 2x`,
    },
  },
  LEVIS: {
    name: 'Levis',
    image: {
      src: `${ASSET_URL}/${devicePath}/Levis.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Levis.png 1x, ${ASSET_URL}/${devicePath}/Levis@2x.png 2x`,
    },
  },
  TAMARIS: {
    name: 'Tamaris',
    image: {
      src: `${ASSET_URL}/${devicePath}/Tamaris.png`,
      srcSet: `${ASSET_URL}/${devicePath}/Tamaris.png 1x, ${ASSET_URL}/${devicePath}/Tamaris@2x.png 2x`,
    },
  },
});

const getBrandsBySite = brands => ({
  fr: [
    brands.VILA,
    brands.ONLY,
    brands.ICHI,
    brands.VERO_MODA,
    brands.NAF_NAF,
    brands.GRACE_MILA,
    brands.IKKS,
    brands.ESPRIT,
    brands.LEE,
    brands.STREET_ONE,
    brands.SCOTCH_SODA,
    brands.TIFFOSI,
    brands.CARMAKOMA,
    brands.PIECES,
    brands.FREEQUENT,
  ],
  be: [
    brands.VILA,
    brands.ONLY,
    brands.ICHI,
    brands.VERO_MODA,
    brands.NAF_NAF,
    brands.GRACE_MILA,
    brands.IKKS,
    brands.ESPRIT,
    brands.LEE,
    brands.STREET_ONE,
    brands.SCOTCH_SODA,
    brands.TIFFOSI,
    brands.CARMAKOMA,
    brands.PIECES,
    brands.FREEQUENT,
  ],
  it: [
    brands.VILA,
    brands.ONLY,
    brands.ICHI,
    brands.GRACE_MILA,
    brands.NAF_NAF,
    brands.SCOTCH_SODA,
    brands.DIXIE,
    brands.ESPRIT,
    brands.LEE,
    brands.SILVIAN_HEACH,
    brands.SOAKEDINLUXURY,
    brands.REPLAY,
    brands.STREET_ONE,
    brands.FRENCH_CONNECTION,
    brands.PIECES,
  ],
  gb: [
    brands.VILA,
    brands.ONLY,
    brands.ICHI,
    brands.VERO_MODA,
    brands.HOBBS,
    brands.WHISTLES,
    brands.JOULES,
    brands.MOSS_COPENHAGEN,
    brands.FRENCH_CONNECTION,
    brands.LEE,
    brands.SOAKEDINLUXURY,
    brands.FATFACE,
    brands.ESPRIT,
    brands.SOFT_REBELS,
    brands.SCOTCH_SODA,
  ],
  es: [
    brands.VILA,
    brands.ONLY,
    brands.ICHI,
    brands.VERO_MODA,
    brands.NAF_NAF,
    brands.SCOTCH_SODA,
    brands.CARMAKOMA,
    brands.TIFFOSI,
    brands.LEE,
    brands.STREET_ONE,
    brands.PIECES,
    brands.GRACE_MILA,
    brands.SOFT_REBELS,
    brands.GARCIA_JEANS,
    brands.ESPRIT,
  ],
  pt: [
    brands.VILA,
    brands.ONLY,
    brands.ICHI,
    brands.VERO_MODA,
    brands.NAF_NAF,
    brands.GRACE_MILA,
    brands.CARMAKOMA,
    brands.TIFFOSI,
    brands.MOSS_COPENHAGEN,
    brands.STREET_ONE,
    brands.ESPRIT,
    brands.PIECES,
    brands.CKS,
    brands.B_YOUNG,
    brands.JUNAROSE,
  ],
  de: [
    brands.VILA,
    brands.ONLY,
    brands.ICHI,
    brands.ESPRIT,
    brands.VERO_MODA,
    brands.TOMTAILOR,
    brands.CARMAKOMA,
    brands.STREET_ONE,
    brands.LEE,
    brands.BROADWAY,
    brands.NAF_NAF,
    brands.SCOTCH_SODA,
    brands.LEVIS,
    brands.CECIL,
    brands.TAMARIS,
  ],
  at: [
    brands.VILA,
    brands.ONLY,
    brands.ICHI,
    brands.ESPRIT,
    brands.VERO_MODA,
    brands.TOMTAILOR,
    brands.CARMAKOMA,
    brands.STREET_ONE,
    brands.LEE,
    brands.BROADWAY,
    brands.NAF_NAF,
    brands.SCOTCH_SODA,
    brands.LEVIS,
    brands.CECIL,
    brands.TAMARIS,
  ],
});

export {getBrandsDefinition, getBrandsBySite};
