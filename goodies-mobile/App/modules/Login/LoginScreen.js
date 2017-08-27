import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { View } from 'react-native'
import { connect } from 'react-redux'
import TextInput from './../../core/Form/TextInput'
import LoginActions from './../../Redux/LoginRedux'
import {Button} from 'react-native-elements'
import styles from './LoginStyles'

class LoginScreen extends Component {
  onSubmit = data => {
    console.log(this.props.login)
    // this.props.login(data.email, data.password)
    this.props.login('copii@cauza.com', 'password')
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          <Field name='email' label={'Email'} component={TextInput} />
          <Field name='password' label={'Parolă'} component={TextInput} />
          <Button containerViewStyle={styles.buttonContainer} buttonStyle={styles.button} onPress={handleSubmit(this.onSubmit)} title='Loghează-te' />
        </View>
      </View>
    )
  }
}

export default connect(state => ({

}), {
  login: LoginActions.loginRequest
})(reduxForm({
  form: 'login'
})(LoginScreen))
