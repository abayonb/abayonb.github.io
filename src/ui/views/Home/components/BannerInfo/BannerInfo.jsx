import React, {useEffect, useState} from 'react';

import {View, Link, Modal, Portal, ALIGN, LAYOUT, useDevice} from '@aurora';
import {usePresenter, useScrollLock} from '@hooks';
import {MessageI18n, useIntl} from '@i18n';
import {IconLogo} from '@components/primitives/Icons';
import {Wysiwyg} from '@components/atoms';

import {BannerInfoPresenter} from './BannerInfo.presenter';
import './BannerInfo.css';

const BANNER_CONTENT_HEIGHT_PERCENT = 0.55;

const ID = 'banner-Info';

const BannerInfo = () => {
  const {screen} = useDevice();
  const {formatMessage} = useIntl();

  const [banner, setBanner] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  useScrollLock({isVisible: modalVisible, id: ID});

  const handleCloseModal = () => setModalVisible(false);

  const {onLoadBanner} = usePresenter(() =>
    BannerInfoPresenter({
      showBanner: banner => {
        setBanner(banner);
      },
    }),
  );

  useEffect(() => {
    onLoadBanner();
  }, [onLoadBanner]);

  const handleOnPressLink = event => {
    event.preventDefault();
    setModalVisible(true);
  };

  return (
    <>
      {banner && (
        <>
          <aside className="banner-info">
            <span className="banner-info__text">
              <MessageI18n
                id={banner.content.text}
                values={{
                  link: (
                    <Link
                      detail
                      level={2}
                      onPress={handleOnPressLink}
                      key={banner.content.text}
                      customStyle="banner-info__link"
                      href="#"
                      underlined
                    >
                      <MessageI18n id={banner.content.link} />
                    </Link>
                  ),
                }}
              />
            </span>
          </aside>
          <Portal id={ID}>
            <Modal
              customStyle="banner-info__modal"
              isVisible={modalVisible}
              onClose={handleCloseModal}
              title={formatMessage({id: banner.modal.title})}
            >
              <div
                id={ID}
                className="modal-inner-scroll"
                style={{
                  height: screen.height * BANNER_CONTENT_HEIGHT_PERCENT,
                }}
              >
                <View paddingTop={LAYOUT.XS} textAlign={ALIGN.LEFT}>
                  <Wysiwyg>
                    <MessageI18n id={banner.modal.content} />
                  </Wysiwyg>
                </View>
                <View paddingTop={LAYOUT.XS} paddingBottom={LAYOUT.XXL} align={ALIGN.CENTER}>
                  {banner.logo && <IconLogo />}
                </View>
              </div>
            </Modal>
          </Portal>
        </>
      )}
    </>
  );
};

export {BannerInfo};
