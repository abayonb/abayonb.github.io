import React from 'react';
import PropTypes from 'prop-types';

import {NavLink} from '@bridges';

import './NavigationLink.css';

const NavigationLink = ({to, children, exact}) => {
  return (
    <NavLink className="navigation-link" to={to} exact={exact}>
      {children}
    </NavLink>
  );
};

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool,
};

export {NavigationLink};
