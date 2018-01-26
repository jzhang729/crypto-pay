export const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
      values.email
    )
  ) {
    errors.email = 'Invalid email address';
  }

  if (!values.address1) {
    errors.address1 = 'Required';
  }

  if (!values.city) {
    errors.city = 'Required';
  }
  if (!values.stateProv) {
    errors.stateProv = 'Required';
  }

  if (!values.country) {
    errors.country = 'Required';
  }

  return errors;
};
