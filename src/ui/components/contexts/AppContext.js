import PropTypes from 'prop-types';
import React, {createContext, useContext, useMemo, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [header, setHeader] = useState(undefined);

  const value = useMemo(() => ({header, setHeader}), [header]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useApp = () => useContext(AppContext);
