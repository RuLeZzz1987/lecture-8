import React from 'react';

export default ({ error, timedOut, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        Error! <button onClick={retry}>Retry</button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div>
        Taking a long time... <button onClick={retry}>Retry</button>
      </div>
    );
  }

  if (pastDelay) {
    return <div>Loading...</div>;
  }

  return null;
};