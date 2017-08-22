import React, { Component } from 'react'
import { Form, Icon } from 'semantic-ui-react'

export default class CustomField extends Component {
  render () {
    const { input, label, placeholder, type, meta: {asyncValidating, touched, error} } = this.props
    return (
      <Form.Field>
        <label>{label}</label>
        <textarea {...input} type={type} placeholder={placeholder} style={{borderRadius: 0}} />
        {touched && error && <div className='form-error'><Icon name='warning circle' />{error}</div>}
      </Form.Field>
    )
  }
}
