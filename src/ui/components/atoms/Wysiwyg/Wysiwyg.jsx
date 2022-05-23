import React from 'react';
import PropTypes from 'prop-types';
import './Wysiwyg.css';

const Wysiwyg = ({children}) => {
  return <div className="wysigyg">{children}</div>;
};

Wysiwyg.propTypes = {
  children: PropTypes.node,
};

export {Wysiwyg};
