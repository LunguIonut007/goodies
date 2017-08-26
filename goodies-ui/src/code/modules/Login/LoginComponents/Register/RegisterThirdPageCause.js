import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import CustomFieldLarge from 'core/CustomField/CustomFieldLarge'
import RegisterActions from './../../RegisterRedux'
import { I18n } from 'react-redux-i18n'
import validate from './registerValidate'

class Register extends Component {
  render () {
    const { onNext } = this.props
    return (
      <Form inverted onSubmit={this.props.handleSubmit(onNext)}>
        <Field
          name='description'
          type='text'
          component={CustomFieldLarge}
          label={I18n.t('form.description')}
          placeholder='Description'
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
