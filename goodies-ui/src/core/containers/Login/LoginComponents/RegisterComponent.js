import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import CustomField from '../../../components/CustomField/CustomField'

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
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

class Register extends Component {
  render () {
    return (
      <Form inverted>
        <Field
          name='email'
          type='text'
          component={CustomField}
          label='Email'
          placeholder='bestDonatorEvah@email.com'
              />
        <Field
          name='password'
          type='password'
          component={CustomField}
          label='Password'
          placeholder='Not1234'
              />
        <Field
          name='confirmPassword'
          type='password'
          component={CustomField}
          label='Confirm Password'
          placeholder='StillNot1234'
              />
        <Button fluid type='submit' className='submitContainerButton'>Login</Button>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'register',
  validate
})(Register)
