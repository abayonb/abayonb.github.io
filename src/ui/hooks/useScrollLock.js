import {useEffect} from 'react';

import {BodyScroll} from '@bridges';

const useScrollLock = ({isVisible, id}) => {
  useEffect(() => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      if (isVisible) {
        BodyScroll.disable(targetElement);
      } else {
        BodyScroll.enable(targetElement);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);
};

export {useScrollLock};
