import PropTypes from 'prop-types';
import React, {useContext, useState} from 'react';

const MendelContext = React.createContext();

const sessionStorageKey = 'LKEXP';

const getInitialExperiments = () => JSON.parse(sessionStorage.getItem(sessionStorageKey) || '[]');

const MendelProvider = ({children}) => {
  const [experiments] = useState(() => getInitialExperiments());

  const getVariantByExperiment = experimentName => {
    const experiment = experiments.find(exp => exp.experiment === experimentName);

    return experiment ? experiment.variant : undefined;
  };

  const value = {
    experiments,
    getVariant: experimentName => getVariantByExperiment(experimentName),
  };

  return <MendelContext.Provider value={value}>{children}</MendelContext.Provider>;
};

MendelProvider.propTypes = {
  children: PropTypes.node,
};

const useMendel = () => useContext(MendelContext);

export {useMendel, MendelProvider};
