import {useLayoutEffect} from 'react';

import {useApp} from '@contexts';

export const useHeader = headerOptions => {
  const {setHeader} = useApp();

  useLayoutEffect(() => {
    setHeader(headerOptions);

    return () => setHeader(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerOptions]);
};
