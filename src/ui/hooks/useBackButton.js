import React, {useEffect} from 'react';
import {useLocation} from '@bridges';

const useBackButton = callback => {
  const usePrevious = value => {
    const ref = React.useRef();
    React.useEffect(() => {
      ref.current = value;
    });

    return ref.current;
  };

  const location = useLocation();
  const prevLocation = usePrevious(location);
  useEffect(() => {
    callback();
  }, [callback, location, prevLocation]);
};

export {useBackButton};
