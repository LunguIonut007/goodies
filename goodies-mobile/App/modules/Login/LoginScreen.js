import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { View } from 'react-native'
import { connect } from 'react-redux'
import TextInput from './../../core/Form/TextInput'
import LoginActions from './../../Redux/LoginRedux'
import {Button, FormValidationMessage} from 'react-native-elements'
import styles from './LoginStyles'

class LoginScreen extends Component {
  onSubmit = data => {
    console.log('data', data)
    this.props.login(data.email, data.password)
  }

  render () {
    const { handleSubmit, sagaError } = this.props
    console.log(this.props)
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          <Field name='email' label={'Email'} component={TextInput} />
          <Field name='password' label={'Parolă'} component={TextInput} />
          {sagaError && <FormValidationMessage>{sagaError}</FormValidationMessage>}
          <Button containerViewStyle={styles.buttonContainer} buttonStyle={styles.button} onPress={handleSubmit(this.onSubmit)} title='Loghează-te' />
        </View>
      </View>
    )
  }
}

export default connect(state => ({
  sagaError: state.login.error
}), {
  login: LoginActions.loginRequest
})(reduxForm({
  form: 'login'
})(LoginScreen))
