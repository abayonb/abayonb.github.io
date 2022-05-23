import React, {useEffect, useState} from 'react';
import {Layout, Link, Text, View, ALIGN, LAYOUT, useDevice, COLOR, SIZE} from '@aurora';

import {usePresenter} from '@hooks';
import {useIntl, MessageI18n} from '@i18n';

import {FollowUsPresenter} from './FollowUs.presenter';
import './FollowUs.css';
import {Image} from '../Image/Image';

const FollowUs = ({...others}) => {
  const [socialLinks, setSocialLinks] = useState([]);
  const {formatMessage} = useIntl();
  const {screen} = useDevice();
  const devicePath = screen.S ? 'mobile' : 'desktop';
  const isMobile = devicePath === 'mobile';
  const imageURL = `${process.env.REACT_APP_ASSETS_PATH}/images/social/${devicePath}`;

  const {onLoadSocialLinks} = usePresenter(() =>
    FollowUsPresenter({
      showSocialLinks: links => {
        setSocialLinks(links);
      },
    }),
  );

  useEffect(() => {
    onLoadSocialLinks();
  }, [onLoadSocialLinks]);

  const renderSocialLink = (link, id) => {
    const urlSocialLink = formatMessage({id: link.url});
    const hasSocialLink = urlSocialLink !== link.url;
    return (
      hasSocialLink && (
        <Link
          key={id}
          href={formatMessage({id: link.url})}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          display="block"
          customStyle={id === 0 ? '' : 'follow-us__link'}
        >
          <Image
            height="24"
            width="24"
            src={{
              default: {
                src: `${imageURL}/social-${link.name}${isMobile ? '' : '@2x'}.png`,
                srcSet: `${imageURL}/social-${link.name}.png 1x, ${imageURL}/social-${link.name}@2x.png 2x`,
              },
            }}
            lazyLoad
            noObserver
          />
        </Link>
      )
    );
  };

  const renderSocialLinks = (links, screen) => links.map((link, index) => renderSocialLink(link, index, screen));

  return (
    <Layout
      align={ALIGN.CENTER}
      as="aside"
      flexDirection="column"
      customStyle="follow-us"
      marginBottom={{L: LAYOUT.M, default: LAYOUT.M}}
      marginTop={SIZE.S}
      {...others}
    >
      <Text align={ALIGN.CENTER} as="p" action level={3} marginBottom={LAYOUT.XS} upperCase color={COLOR.BASE}>
        <MessageI18n id="home.followus" defaultMessage="Follow us" />
      </Text>
      <View as="nav" customStyle="follow-us__links" marginTop={SIZE.XXS}>
        {renderSocialLinks(socialLinks, screen)}
      </View>
    </Layout>
  );
};

export {FollowUs};
