const prefix = 'web_';

const defaultVariantsForExperiment = {
  pickupByDefault: 'address',
  freeTrialPromocode: 'freeTrialPromocode',
  homeCost: 'same',
};

const mendelConfigData = {
  freeTrialPromocode: {
    showPromoBar: true,
  },
  noFreeTrialPromocode: {
    showPromoBar: false,
  },
  same: {
    plus2euros: false,
  },
  plus2: {
    plus2euros: false,
  },
};

const forcedVariants = {
  newxp: {
    value: '27P6mV',
    variant: 'noFreeTrialPromocode',
  },
};

export {prefix, defaultVariantsForExperiment, mendelConfigData, forcedVariants};
