import React from 'react';
import { Select } from '@shopify/polaris';

export default ({ input, label }) => {
  return (
    <div className="form__field">
      <div style={{ display: 'block' }}>
        <label>{label}</label>
      </div>
      <Select
        {...input}
        options={[
          { label: 'Select from the list', value: '' },
          { label: 'United States', value: 'USA' }
        ]}
      />
    </div>
  );
};
