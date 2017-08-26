import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import CustomField from 'core/CustomField/CustomField'
import RegisterActions from './../../RegisterRedux'
import { I18n } from 'react-redux-i18n'
import validate from './registerValidate'

class Register extends Component {
  render () {
    const { onNext } = this.props
    return (
      <Form inverted onSubmit={this.props.handleSubmit(onNext)}>
        <Field
          name='name'
          type='text'
          component={CustomField}
          label={I18n.t('form.name')}
          placeholder='Nam3'
        />
        <Field
          name='phone'
          type='text'
          component={CustomField}
          label={I18n.t('form.phoneNumber')}
          placeholder='Phone number'
        />
        <Field
          name='adminName'
          type='text'
          component={CustomField}
          label={I18n.t('form.adminName')}
          placeholder='Admin name'
        />
        <Button fluid type='button' onClick={this.props.handleSubmit(onNext)} className='submitContainerButton'>Next</Button>
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
