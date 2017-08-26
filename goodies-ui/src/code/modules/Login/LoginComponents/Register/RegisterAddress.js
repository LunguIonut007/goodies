import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import CustomField from 'core/CustomField/CustomField'
import RegisterActions from './../../RegisterRedux'
import { I18n } from 'react-redux-i18n'
import validate from './registerValidate'

class Register extends Component {
  onSubmit = data => {
    const { entityType, register, destroy } = this.props
    register(data, entityType)
    destroy('register')
  }

  render () {
    return (
      <Form inverted onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name='address'
          type='text'
          component={CustomField}
          label={I18n.t('form.address')}
          placeholder='Address'
        />
        <Button fluid type='button' onClick={this.props.handleSubmit(this.onSubmit)} className='submitContainerButton'>Submit</Button>
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
  validate,
  destroyOnUnmount: false
})(Register))
