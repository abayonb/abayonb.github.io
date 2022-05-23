import React from 'react';
import {Button, Text, View, COLOR, LAYOUT} from '@aurora';
import {MessageI18n} from '@i18n';
import {LOGIN_PATH} from '@app/Router';

const LoginButton = () => {
  const handleOnLogin = () => {
    window.location.href = LOGIN_PATH;
  };

  return (
    <View marginTop={LAYOUT.M} align="center">
      <Text level={3} marginBottom={LAYOUT.XXS} display="block">
        <MessageI18n id="navigation.menu.question" defaultMessage="Do you have an account?" />
      </Text>
      <Button onPress={handleOnLogin} marginBottom={LAYOUT.M} small color={COLOR.BASE} wide={false} outlined>
        <MessageI18n id="navigation.menu.login" defaultMessage="Log in" />
      </Button>
    </View>
  );
};

export {LoginButton};
