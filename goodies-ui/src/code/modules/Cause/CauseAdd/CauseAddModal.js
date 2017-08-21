import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import Modal from 'core/Modal/ModalComponent'
import {Field, reduxForm} from 'redux-form'
import CustomField from 'core/CustomField/CustomField'

class CauseAddModal extends Component {

  componentWillMount() {
    this.state = { open: false }
  }

  onClick = () => {
      this.setState({open: !this.state.open})
  }

  onSubmit = () => {

  }

  render() {
    const { open } = this.state
    return (
        <div>
            <Button onClick={this.onClick}>Add </Button>
            <Modal open={open} header={'Add offer'}  onClose={this.onClick}>
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
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
                className='submit-button'
                onClick={this.props.handleSubmit(this.onSubmit)}
                >Submit
                </Button>
                <Button fluid type='button' className='cancel-button'onClick={this.onClick}>Cancel</Button>
            </Form>
            </Modal>
        </div>
     );
  }
}

const validate = values => {
    const errors = {}
    return errors
  }

export default reduxForm({ form: 'causeAdd', validate})(CauseAddModal)