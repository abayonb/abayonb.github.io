import {useEffect} from 'react';

const useLazyImageIntersection = ({elementsSelector, entries, setElements, unobserve, condition = true}) => {
  const removeLazyImage = ({entries, unobserve}) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.classList.remove('image--lazy');
        if (Object.values(lazyImage.classList).includes('image--ease')) {
          lazyImage.classList.remove('image--ease');
        }
        unobserve(lazyImage);
      }
    });
  };

  useEffect(() => {
    //Usually a condition is not needed but some components have a load state
    if (condition) {
      const elements = document.querySelectorAll(elementsSelector);
      setElements(elements);
    }
  }, [condition, elementsSelector, setElements]);

  useEffect(() => {
    removeLazyImage({entries, unobserve});
  }, [entries, unobserve]);
};

export {useLazyImageIntersection};
