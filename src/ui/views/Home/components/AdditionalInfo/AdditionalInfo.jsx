import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {View, LAYOUT, useDevice} from '@aurora';
import {usePresenter} from '@hooks';
import {AdditionalInfoPresenter} from './AdditionalInfo.presenter';
import {AboutYourLookiero, AboutCost} from './components';

const emptyFn = () => {};

const AdditionalInfo = ({onLoadImg = emptyFn}) => {
  const {screen} = useDevice();
  const [{aboutCost, aboutYourLookiero}, setAdditionalInfo] = useState({});

  const {onLoadInfo} = usePresenter(() =>
    AdditionalInfoPresenter({
      showAdditionalInfo: data => {
        setAdditionalInfo(data);
      },
      screen,
    }),
  );

  useEffect(() => {
    onLoadInfo();
  }, [onLoadInfo]);

  return (
    <View marginTop={LAYOUT.L}>
      {aboutYourLookiero && <AboutYourLookiero info={aboutYourLookiero} onLoadImg={onLoadImg} />}
      {aboutCost && <AboutCost info={aboutCost} onLoadImg={onLoadImg} />}
    </View>
  );
};

AdditionalInfo.propTypes = {
  onLoadImg: PropTypes.func,
};

export {AdditionalInfo};
