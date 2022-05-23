export const removeLazyImage = ({entries, unobserve}) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.srcset = lazyImage.dataset.srcset;
      lazyImage.classList.remove('image--lazy');
      if (Object.values(lazyImage.classList).includes('image--ease')) {
        lazyImage.classList.remove('image--ease');
      }
      unobserve(lazyImage);
    }
  });
};
