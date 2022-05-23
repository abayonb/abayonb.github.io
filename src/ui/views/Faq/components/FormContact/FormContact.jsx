import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';

import {Box, Button, InputField, Layout, Text, LAYOUT} from '@aurora';
import {useNotification} from '@contexts';
import {usePresenter} from '@hooks';
import {MessageI18n, useIntl} from '@i18n';

import {FormContactPresenter} from './FormContact.presenter';
import {TEXT} from './FormContact.definition';

const FormContact = ({topic, topics = []}) => {
  const {formatMessage} = useIntl();
  const {showError, showSuccess} = useNotification();

  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({topic});

  const [fields, setFields] = useState(false);
  const [requiredFields, setRequiredFields] = useState(false);

  const {onLoadFields, sendForm, isEmailValid, getFieldError, localizeOptions} = usePresenter(() =>
    FormContactPresenter({
      showForm: fields => {
        setFields(fields);
      },
      getRequiredFields: fields => {
        setRequiredFields(fields);
      },
    }),
  );

  useEffect(() => {
    onLoadFields();
  }, [onLoadFields]);

  const handleChangeField = (field, event) => {
    const value = event.currentTarget.value;
    const nextForm = {...form, [field]: value};
    const {email = ''} = nextForm;

    setForm({
      ...nextForm,
      validated:
        !requiredFields.some(field => (nextForm[field] || '').trim().length === 0) &&
        (email !== '' ? isEmailValid(email) : true),
    });
  };

  useEffect(() => {
    setForm({topic});
  }, [topic]);

  const getI18nCategorySelected = categoryValue => {
    const topicSelected = topics.find(topic => topic.value === categoryValue);
    return topicSelected ? formatMessage({id: topicSelected.id}) : categoryValue;
  };

  const handleSubmitForm = async () => {
    try {
      setBusy(true);
      await sendForm({...form, topic: getI18nCategorySelected(form.topic)});
      showSuccess({message: formatMessage(TEXT.CONTACT_SUCCESS)});
      setOpen(false);
      setForm({topic});
    } catch (error) {
      showError({message: formatMessage(TEXT.CONTACT_ERROR)});
    } finally {
      setBusy(false);
    }
  };

  return (
    <Layout alignItems="center" flexDirection="column">
      <Box size={{L: '1/2'}} marginTop={LAYOUT.M}>
        <Text as="h2" align="center" heading level={3} marginBottom={LAYOUT.XXS}>
          <MessageI18n id="contact.main.title" defaultMessage="Contact us" />
        </Text>
        <Text as="p" align="center" level={2}>
          <MessageI18n
            id="contact.main.subtitle"
            defaultMessage="Drop us a message and we'll aim to get back to you within one working day. We're here from Monday to Friday, from 8am to 5pm."
          />
        </Text>
      </Box>
      <Box size={{L: '1/3'}} marginTop={LAYOUT.M} paddingBottom={LAYOUT.M}>
        {open && (
          <>
            <InputField
              defaultValue={topic}
              icon="arrow-down"
              label={formatMessage({id: 'choose.topic', defaultMessage: 'Choose your topic'})}
              options={localizeOptions(topics, {formatMessage})}
              onChange={event => handleChangeField('topic', event)}
              name="question-topic"
              marginBottom={LAYOUT.XXS}
            />

            {fields.map(({id, hint, label, placeholder, ...rest}) => (
              <InputField
                {...rest}
                defaultValue={form[id]}
                error={getFieldError(id, form[id])}
                key={id}
                label={formatMessage({id: label})}
                placeholder={placeholder ? formatMessage({id: placeholder}) : undefined}
                marginTop={LAYOUT.XXS}
                hint={getFieldError(id, form[id]) && hint ? formatMessage({id: hint}) : undefined}
                onChange={event => handleChangeField(id, event)}
              />
            ))}
          </>
        )}

        <Button
          id="contact"
          disabled={open && (busy || !form.validated)}
          onPress={open ? handleSubmitForm : () => setOpen(true)}
          marginTop={LAYOUT.XXS}
        >
          <MessageI18n id={open ? 'contact.label.submit' : 'contact.tell.us'} defaultMessage="Talk with us" />
        </Button>
      </Box>
    </Layout>
  );
};

FormContact.propTypes = {
  topic: PropTypes.string,
  topics: PropTypes.arrayOf(PropTypes.shape({})),
};

export {FormContact};
