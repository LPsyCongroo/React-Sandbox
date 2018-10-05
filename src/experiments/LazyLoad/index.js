import React from 'react';

import Lazy from './lazy';
import Loader from './loader';

export default () => (
  <div>
    <h1>Lazy Load Test</h1>
    <Lazy getComponent={() => import('./lazy-test-component')} loader={Loader} ></Lazy>
  </div> 
)
