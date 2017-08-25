import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import Modal from 'core/Modal/ModalComponent'
import {Field, reduxForm} from 'redux-form'
import CustomField from 'core/CustomField/CustomField'
import CustomFieldLarge from 'core/CustomField/CustomFieldLarge'
import { connect } from 'react-redux'

class RequestAcceptModal extends Component {
  onSubmit = data => {
    this.props.saveOffer(data)
  }

  render () {
    const { open, onClick } = this.props

    return (
      <div>
        <Modal open={open} header={'Add offer'} onClose={onClick}>
          <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name='title'
              type='text'
              component={CustomField}
              label='title'
              placeholder='Title'
                />
            <Field
              name='description'
              type='text'
              component={CustomFieldLarge}
              label='description'
              placeholder='description'
                />
            <div className='action-buttons-container'>
              <Button
                fluid
                size='small'
                type='button'
                className='submit-button'
                onClick={this.props.handleSubmit(this.onSubmit)}
                    >Submit
                    </Button>
              <Button fluid type='button' size='small' className='cancel-button' onClick={onClick}>Cancel</Button>
            </div>
          </Form>
        </Modal>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}
  return errors
}

export default connect(
    state => ({

    }), {
    }
)(reduxForm({ form: 'requestAcceptModal', validate })(RequestAcceptModal))
