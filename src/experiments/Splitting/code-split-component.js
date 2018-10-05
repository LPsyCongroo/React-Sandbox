import React from 'react';

const chunkPromise = import('./chunk');
console.log("I'm called after the worker import promise is first fired off");

chunkPromise.then(chunk => {
  console.log("I'm called when the promise succeeds")
  chunk.default();
}).catch(err => {
  console.log("I'm run when the promise fails");
  console.error(err.message);
})

export default () => (
  <div>
    Some code splitting tests
  </div>
)