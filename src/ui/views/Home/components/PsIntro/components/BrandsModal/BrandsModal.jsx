import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {usePresenter, useScrollLock} from '@hooks';
import {Image, Modal, ScrollView, COLOR, LAYOUT, useDevice} from '@aurora';
import {useIntl} from '@i18n';
import {BrandsModalPresenter} from './BrandsModal.presenter';

import './BrandsModal.css';
import {iOSInAppBrowser} from '@helpers/inAppBrowser';

const ID = 'brands-modal';

const BrandsModal = ({isVisible, onClose}) => {
  const {screen} = useDevice();
  const [brands, setBrands] = useState([]);
  const {formatMessage} = useIntl();
  const {onLoadBrands} = usePresenter(() =>
    BrandsModalPresenter({
      showBrands: brands => {
        setBrands(brands);
      },
      screen,
    }),
  );

  const isVisibleInIOSAppBrowser = iOSInAppBrowser() && isVisible;

  useScrollLock({isVisible, id: ID});

  useEffect(() => {
    onLoadBrands();
  }, [onLoadBrands]);

  useEffect(() => {
    if (isVisibleInIOSAppBrowser) {
      const modal = document.getElementById(ID);
      const modalOverlay = modal.getElementsByClassName('overlay')[0];
      const brandsModal = document.getElementsByClassName('modal__box')[0];
      const modalMinHeight = window.innerHeight - 65;
      brandsModal.style.minHeight = `${modalMinHeight}px`;
      modalOverlay.style.height = 0;
    }
  }, [isVisibleInIOSAppBrowser]);

  return (
    <Modal
      id={ID}
      description={formatMessage({
        id: 'home.brands.subtitle',
        defaultMessage: 'We work with over 150 European brands such as…',
      })}
      isVisible={isVisible}
      onClose={onClose}
      title={formatMessage({id: 'home.brands.title', defaultMessage: 'Our brands'})}
      color={COLOR.INFO}
      customStyle="brands-modal"
      style={!screen.L ? {top: isVisible ? '0' : '10%'} : null}
    >
      <ScrollView customStyle="brands-modal-list" paddingHorizontal={{L: LAYOUT.L}}>
        {brands.map(brand => (
          <Image lazyLoad alt={brand.name} key={brand.name} {...brand.image} />
        ))}
      </ScrollView>
    </Modal>
  );
};

BrandsModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export {BrandsModal};
