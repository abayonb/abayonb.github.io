import React, {useEffect, useState} from 'react';

import {Link, Text, View, LAYOUT} from '@aurora';
import {NavigationLink} from '@components/atoms';
import {MessageI18n} from '@i18n';
import {usePresenter} from '@hooks';

import {MenuPresenter} from './Menu.presenter';
import {LINK_MENU_PROPS} from './Menu.definition';

const Menu = () => {
  const [links, setLinks] = useState([]);

  const {onLoadLinks} = usePresenter(() =>
    MenuPresenter({
      showLinks: links => {
        setLinks(links);
      },
    }),
  );

  useEffect(() => {
    onLoadLinks();
  }, [onLoadLinks]);

  const renderLink = link => {
    if (typeof link.to !== 'undefined') {
      return (
        <NavigationLink to={link.to} exact>
          <Text {...LINK_MENU_PROPS}>
            <MessageI18n id={link.title} />
          </Text>
        </NavigationLink>
      );
    }
    return (
      <Link href={link.href} {...LINK_MENU_PROPS} target="_blank">
        <MessageI18n id={link.title} />
      </Link>
    );
  };

  const renderLinks = links =>
    links.map((link, index) => (
      <View as="li" key={index} display="flex" justifyContent="center" marginTop={index === 0 ? undefined : LAYOUT.XS}>
        {renderLink(link)}
      </View>
    ));

  return (
    <>
      <View customStyle="menu menu--panel">
        <View as="ul" paddingTop={LAYOUT.L} marginBottom={LAYOUT.M}>
          {renderLinks(links)}
        </View>
      </View>
    </>
  );
};

export {Menu};
