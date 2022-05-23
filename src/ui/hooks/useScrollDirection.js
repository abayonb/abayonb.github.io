import {useCallback, useEffect, useRef, useState} from 'react';

const SCROLL = {
  UP: 'UP',
  DOWN: 'DOWN',
};

const useScrollDirection = (offset = 0) => {
  const scroll = useRef(0);
  const [scrollDirection, setScrollDirection] = useState(SCROLL.UP);
  const [offsetReached, setOffsetReached] = useState(false);

  const handleScroll = useCallback(() => {
    setScrollDirection(window.scrollY > scroll.current ? SCROLL.DOWN : SCROLL.UP);
    setOffsetReached(window.scrollY > offset);
    scroll.current = window.scrollY;
  }, [offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {direction: scrollDirection, offsetReached};
};

export {useScrollDirection, SCROLL};
