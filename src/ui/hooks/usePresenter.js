import React from 'react';

export const usePresenter = createPresenter => {
  const presenter = React.useRef(null);
  if (presenter.current === null) {
    presenter.current = createPresenter();
  }

  return presenter.current;
};
