import React, {useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {isSeoRender} from '@core/seo/application';
import {getFeatureFlags} from '@core/featureFlags/application';

const FeatureFlagsContext = React.createContext({});

const getFeatureFlagsFn = async ({setFeatureFlags}) => {
  const featureFlagList = await getFeatureFlags();
  let featureFlags = {};
  featureFlagList.forEach(featureFlag => {
    featureFlags[featureFlag.name] = featureFlag.enabled;
  });
  setFeatureFlags(featureFlags);
};

const FeatureFlagsProvider = ({children}) => {
  const [featureFlags, setFeatureFlags] = useState();

  useEffect(() => {
    if (!isSeoRender) {
      getFeatureFlagsFn({setFeatureFlags});
    }
  }, []);
  return <FeatureFlagsContext.Provider value={featureFlags}>{children}</FeatureFlagsContext.Provider>;
};

FeatureFlagsProvider.propTypes = {
  children: PropTypes.node,
};

const useFeatureFlags = () => useContext(FeatureFlagsContext);

export {useFeatureFlags, FeatureFlagsProvider};
