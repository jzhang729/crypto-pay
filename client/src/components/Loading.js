import React from 'react';
import spinner from '../images/spinner.gif';

const Loading = () => {
  return (
    <div style={{ width: '100%', display: 'block', margin: '0 auto' }}>
      <img
        src={spinner}
        alt="loading"
        style={{ width: '50px', textAlign: 'center' }}
      />
    </div>
  );
};

export default Loading;
