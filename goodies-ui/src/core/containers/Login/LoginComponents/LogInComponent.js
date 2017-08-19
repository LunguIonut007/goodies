import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'
import CustomField from '../../../components/CustomField/CustomField'

const validate = values => {
  const errors = {}
  return errors
}

class LogIn extends Component {
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
        <Button fluid type='submit' className='submitContainerButton'>Login</Button>
      </Form>
    )
  }
}
export default reduxForm({
  form: 'login',
  validate
})(LogIn)
