import React from 'react';
import PropTypes from 'prop-types';
import {MessageI18n} from '@i18n';
import {isSeoRender} from '@views/Views.presenter';
import {Wysiwyg} from '@components/atoms';
import {View, Text, LAYOUT} from '@aurora';
import {Image} from '@components/atoms';

const getContentTermsByTemplate = content => {
  if (content.template === 'helps') {
    return (
      <>
        {content.images.map((image, index) => (
          <View key={image.alt + index} marginBottom={content.images.length - 1 !== index ? LAYOUT.S : undefined}>
            <Image
              height="256"
              width="640"
              key={image.alt + index}
              src={image.source}
              alt={image.alt}
              lazyLoad
              noObserver
            />
          </View>
        ))}
      </>
    );
  }
};

const getContentTerms = (terms, termSelected) =>
  terms.map(
    term =>
      (termSelected == term.id || isSeoRender) && (
        <Wysiwyg key={term.id}>
          <article>
            <Text action as="h3" level={2} marginBottom={LAYOUT.S} upperCase>
              <MessageI18n id={term.title} />
            </Text>
            {term.i18nContent && <MessageI18n id={term.i18nContent} />}
            {term.content ? getContentTermsByTemplate(term.content) : null}
          </article>
        </Wysiwyg>
      ),
  );

const ContentsOfTopics = ({topics, defaultTopic}) => {
  return <>{getContentTerms(topics, defaultTopic)}</>;
};

ContentsOfTopics.propTypes = {
  topics: PropTypes.array,
  defaultTopic: PropTypes.string,
};

export {ContentsOfTopics};
