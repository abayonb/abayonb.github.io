import React, {useEffect, useState} from 'react';
import {Button} from '@aurora';
import {CreateProfileButtonPresenter} from './CreateProfileButton.presenter';
import {usePresenter} from '@hooks';
import {MessageI18n} from '@i18n';

const CreateProfileButton = () => {
  const [urlFunnel, setUrlFunnel] = useState(false);

  const {onLoadFunnelConfig} = usePresenter(() =>
    CreateProfileButtonPresenter({
      showButtonCreateProfile: config => {
        setUrlFunnel(config.url);
      },
    }),
  );

  useEffect(() => {
    onLoadFunnelConfig();
  }, [onLoadFunnelConfig]);

  const handleOnCreateProfile = () => {
    window.location.href = urlFunnel;
  };

  return (
    <>
      {urlFunnel && (
        <Button onPress={handleOnCreateProfile}>
          <MessageI18n id="navigation.start.cta" />
        </Button>
      )}
    </>
  );
};

export {CreateProfileButton};
