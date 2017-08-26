const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      // errors.email = 'Invalid email address' Not working
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be longer than 8 characters'
  } else if (values.password.length > 32) {
    errors.password = 'Password must be shorter than 32 characters'
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required'
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords don\'t match'
  }
  return errors
}

export default validate
