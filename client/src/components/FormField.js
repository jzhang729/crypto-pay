// FormField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label
        style={{
          display: 'block',
          fontWeight: 'bold',
          marginBottom: '0.5rem'
        }}>
        {label}
      </label>
      <input
        {...input}
        style={{
          padding: '1rem',
          marginBottom: '0.5rem',
          width: '25%',
          minWidth: '300px'
        }}
      />
      <div className="red-text" style={{ marginBottom: '1rem' }}>
        {touched && error}
      </div>
    </div>
  );
};
