import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {
  // Helpers
  LAYOUT,
  // Components
  Button,
  Modal,
  WheelPicker,
} from '@aurora';

import {useScrollLock} from '@hooks';
import {useIntl} from '@i18n';
import {TEXT} from './SelectCountryModal.definition';

const ID = 'modal-country-select';

const SelectCountryModal = ({countries, isVisible, onClose, ...others}) => {
  const {formatMessage} = useIntl();
  const [value, setValue] = useState(0);
  const [busy, setBusy] = useState(false);
  const handleSubmit = () => {
    setBusy(true);
    window.location.href = countries[value].value;
  };

  useScrollLock({isVisible, id: ID});

  return (
    <Modal id={ID} isVisible={isVisible} {...others} onClose={onClose} description={formatMessage(TEXT.TITLE)}>
      <WheelPicker
        marginBottom={LAYOUT.M}
        onChange={index => setValue(index)}
        options={countries.map(country => formatMessage({id: country.id}))}
        wide
        selected={value}
      />
      <Button busy={busy} onPress={handleSubmit}>
        {formatMessage(TEXT.CTA)}
      </Button>
    </Modal>
  );
};

SelectCountryModal.propTypes = {
  countries: PropTypes.array,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export {SelectCountryModal};
