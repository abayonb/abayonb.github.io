import React, {Suspense} from 'react';

/* eslint-disable-next-line react/display-name */
const WaitingComponent = Component => props => (
  <Suspense fallback={<p>Loading....</p>}>
    <Component {...props} />
  </Suspense>
);

WaitingComponent.displayName = 'WaitingComponent';

export {WaitingComponent};
