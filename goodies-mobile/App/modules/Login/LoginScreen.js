import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import {
    ActionsContainer,
    Button,
    FieldsContainer,
    Fieldset,
    Form
  } from 'react-native-clean-form'
import {
    Input
  } from 'react-native-clean-form/redux-form'
import LoginActions from './../../Redux/LoginRedux'

class LoginScreen extends Component {
  onSubmit = data => {
    console.log(this.props.login)
    // this.props.login(data.email, data.password)
    this.props.login('cause@cause.cause', 'password')
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <Form>
        <FieldsContainer>
          <Fieldset label='Contact details'>
            <Input name='email' label='Email' placeholder='something@domain.com' />
            <Input name='password' label='Password' placeholder='Password' />
          </Fieldset>
        </FieldsContainer>
        <ActionsContainer>
          <Button icon='md-checkmark' iconPlacement='right' onPress={handleSubmit(this.onSubmit)}>Login</Button>
        </ActionsContainer>
      </Form>
    )
  }
}

export default connect(state => ({

}), {
  login: LoginActions.loginRequest
})(reduxForm({
  form: 'login'
})(LoginScreen))
