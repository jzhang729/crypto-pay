// FormTextField contains logic to render a single label and text input
import React from 'react';
import classNames from 'classnames';

export default ({ input, label, small, meta: { error, touched } }) => {
  const classes = classNames({
    form__field: true,
    'form__field--small': small
  });

  const failedValidation = touched && error;
  return (
    <div className={classes}>
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
