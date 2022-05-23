import React, {useMemo} from 'react';
import {useParams} from 'react-router-dom';
import {Widget} from '@typeform/embed-react';

import {Layout, View, ALIGN, FLEX_DIRECTION} from '@aurora';
import {useHeader} from '@hooks';

import {getTypeformCode} from './Prime.controller';
import './Prime.view.css';

const PrimeView = () => {
  useHeader(useMemo(() => ({showMenu: false, showTopNav: false}), []));
  const {email, fullname, uuid, lastname} = useParams();
  const siteTypeformId = getTypeformCode();

  return (
    <View customStyle="prime-view">
      <Layout customStyle="prime-view" flexDirection={FLEX_DIRECTION.COLUMN} alignItems={ALIGN.CENTER}>
        <Widget
          id={siteTypeformId}
          style={{width: '100%', height: '100%'}}
          className="prime-typeform"
          hidden={{
            email_address: email,
            uuid: uuid,
            fullname: fullname,
            lastname: lastname,
          }}
          hideHeaders
          hideFooter
          disableAutoFocus
        />
      </Layout>
    </View>
  );
};

export {PrimeView};
