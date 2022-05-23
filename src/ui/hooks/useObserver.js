import {useLayoutEffect, useRef, useState} from 'react';

const useObserver = (options = {}) => {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(null);

  useLayoutEffect(() => {
    if (elements.length) {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(observedEntries => {
        setEntries(observedEntries);
      }, options);

      elements.forEach(element => {
        observer.current.observe(element);
      });
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements]);

  const unobserve = target => {
    observer.current.unobserve(target);
  };

  return {entries, setElements, unobserve};
};

export {useObserver};
