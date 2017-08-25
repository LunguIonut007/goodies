import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import CustomField from '../../../core/CustomField/CustomField'
import RegisterActions from './../RegisterRedux'
import { I18n } from 'react-redux-i18n'

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

class Register extends Component {
  onSubmit = data => {
    const { entityType } = this.props
    this.props.register(data, entityType)
  }

  render () {
    return (
      <Form inverted onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name='email'
          type='text'
          component={CustomField}
          label='Email'
          placeholder='bestDonatorEvah@email.com'
              />
        <Field
          name='name'
          type='text'
          component={CustomField}
          label={I18n.t('form.name')}
          placeholder='Nam3'
              />
        <div className='invisible'>
          <Field
            name='password'
            type='password'
            component={CustomField}
            label={I18n.t('form.password')}
            placeholder='Not1234'
              />
        </div>
        <Field
          name='confirmPassword'
          type='password'
          component={CustomField}
          label={I18n.t('form.confirmPassword')}
          placeholder='StillNot1234'
              />
        <Button fluid type='button' onClick={this.props.handleSubmit(this.onSubmit)} className='submitContainerButton'>Register</Button>
      </Form>
    )
  }
}

export default connect(
  null, {
    register: RegisterActions.registerRequest
  }
)(reduxForm({
  form: 'register',
  validate
})(Register))
