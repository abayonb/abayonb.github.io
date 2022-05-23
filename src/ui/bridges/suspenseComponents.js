import React, {Suspense} from 'react';

const suspenseComponents = (...components) => {
  return components.map((component, i) => (
    <Suspense fallback={<div></div>} key={i}>
      {component}
    </Suspense>
  ));
};

export {suspenseComponents};
