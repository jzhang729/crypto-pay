import React from 'react';
import { Select } from '@shopify/polaris';

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
        <div className="form__error--input">
          <Select
            {...input}
            options={[
              { label: 'Select from the list', value: '' },
              { label: 'United States', value: 'USA' }
            ]}
          />
        </div>
      ) : (
        <Select
          {...input}
          options={[
            { label: 'Select from the list', value: '' },
            { label: 'United States', value: 'USA' }
          ]}
        />
      )}
    </div>
  );
};
