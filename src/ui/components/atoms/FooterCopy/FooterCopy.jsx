import React from 'react';

import {Text, ALIGN} from '@aurora';
import {MessageI18n} from '@i18n';

const FooterCopy = () => (
  <Text as="p" align={ALIGN.CENTER} detail level={3} customStyle="footer-copy" upperCase>
    <MessageI18n id="navigation.footer.copyright" />
  </Text>
);

export {FooterCopy};
