import React from 'react';
import PropTypes from 'prop-types';
import {Box, Layout, Text, View, COLOR, LAYOUT} from '@aurora';

import './CourierInfoTile.css';

const CourierInfoTile = ({title, content}) => (
  <Layout fullWidth justifyContent="center">
    <Box size="1/3" customStyle="faq-view__tile" backgroundColor={COLOR.INFO} padding={LAYOUT.S} marginTop={LAYOUT.M}>
      <Text as="h3" heading level={3} align="center" marginBottom={LAYOUT.XS}>
        {title}
      </Text>
      <View align="center" customStyle="courier_content">
        <Text align="center" level={3}>
          {content}
        </Text>
      </View>
    </Box>
  </Layout>
);

CourierInfoTile.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export {CourierInfoTile};
