import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {isSeoRender} from '@core/seo/application';

import {Box, ButtonIcon, Link, Layout, Text, View, COLOR, LAYOUT, POSITION} from '@aurora';
import {MessageI18n, useIntl} from '@i18n';
import {useHistory} from '@bridges/router';
import {TEXT_PROPS} from './CookiesModal.definition';

import {getState, getCookiesPath, setAcceptCookieAgreement} from './CookiesModal.presenter';
import './CookiesModal.css';

const CookiesModal = () => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const {formatMessage} = useIntl();

  React.useEffect(() => {
    if (!isSeoRender) setVisible(getState());
  }, []);

  const handleAccept = () => {
    setVisible(false);
    history.push(getCookiesPath(formatMessage));
    setAcceptCookieAgreement();
  };

  const handleHideModal = () => {
    setAcceptCookieAgreement();
    setVisible(false);
  };

  return (
    visible && (
      <View
        customStyle="cookies-modal"
        layer="M"
        position={POSITION.FIXED}
        marginBottom={LAYOUT.XXS}
        marginHorizontal={LAYOUT.XXS}
      >
        <Layout fullWidth>
          <Box backgroundColor={COLOR.INFO} color={COLOR.CONTENT} customStyle="dialog" padding={LAYOUT.XXS}>
            <View display="flex" alignItems="start">
              <View customStyle="text">
                <Text {...TEXT_PROPS}>
                  <MessageI18n
                    id="home.cookies.paragraph"
                    values={{
                      link: (
                        <Link {...TEXT_PROPS} onPress={handleAccept} underlined>
                          <MessageI18n id="home.cookies.link" />
                        </Link>
                      ),
                    }}
                  />
                </Text>
              </View>
              <ButtonIcon onPress={handleHideModal} aria-label={formatMessage({id: 'a11y.text.close'})} name="close" />
            </View>
          </Box>
        </Layout>
      </View>
    )
  );
};

CookiesModal.propTypes = {
  children: PropTypes.node,
};

export {CookiesModal};

export default CookiesModal;
