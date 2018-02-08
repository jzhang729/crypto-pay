// FormTextField contains logic to render a single label and text input
import React, { Component } from 'react';
import classNames from 'classnames';

class FormTextField extends Component {
  componentDidMount() {
    const { input: { value, onChange } } = this.props;

    if (value === 'Other') {
      onChange('');
    }
  }

  render() {
    const {
      input,
      maxLength,
      label,
      small,
      meta: { error, touched }
    } = this.props;

    const failedValidation = touched && error;

    const outerDivClasses = classNames({
      form__field: true,
      'form__field--small': small
    });

    const inputClasses = classNames({
      'form__error--input': failedValidation
    });

    return (
      <div className={outerDivClasses}>
        <div style={{ display: 'block' }}>
          <label>{label}</label>
          {failedValidation ? (
            <span className="form__error--label">{error}</span>
          ) : null}
        </div>
        <input {...input} maxLength={maxLength} className={inputClasses} />
      </div>
    );
  }
}

export default FormTextField;
