import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'
import { connect } from 'react-redux'
import CustomField from 'core/CustomField/CustomField'
import LoginActions from './../LoginRedux'
import {toastr} from 'react-redux-toastr'
import { I18n } from 'react-redux-i18n'
import { browserHistory } from 'react-router'

const validate = values => {
  const errors = {}
  return errors
}

// entity === true => cause
// entity === fale => donor
class LogIn extends Component {

  onLoginClick = data => {
   this.props.login(data.email,data.password)
  }

  render () {
    console.log(this.props)
    return (
      <Form inverted onSubmit={this.props.handleSubmit(this.onLoginClick)}>
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
        <Button
          fluid
          type='button'
          className='submitContainerButton'
          onClick={this.props.handleSubmit(this.onLoginClick)}
          >Login
        </Button>
      </Form>
    )
  }
}

export default connect(null,{login: LoginActions.loginRequest})(reduxForm({ form: 'login', validate})(LogIn))