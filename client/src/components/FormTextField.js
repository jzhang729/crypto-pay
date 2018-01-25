// FormTextField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  const failedValidation = touched && error;
  return (
    <div className="form__field">
      <div style={{ display: 'block' }}>
        <label>{label}</label>
        {failedValidation ? (
          <span className="form__error--label">{error}</span>
        ) : null}
      </div>

      {failedValidation ? (
        <input {...input} className="form__error--input" />
      ) : (
        <input {...input} />
      )}
    </div>
  );
};
