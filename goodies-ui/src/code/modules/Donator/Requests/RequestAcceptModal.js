import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import Modal from 'core/Modal/ModalComponent'
import {Field, reduxForm} from 'redux-form'
import CustomFieldLarge from 'core/CustomField/CustomFieldLarge'
import { connect } from 'react-redux'
import ProposalActions from 'modules/Proposal/ProposalRedux'

class RequestAcceptModal extends Component {
  onSubmit = payload => {
    const { acceptRequest, request, onClick } = this.props
    acceptRequest(request.id, payload)
    onClick()
  }

  render () {
    const { open, onClick } = this.props

    return (
      <div>
        <Modal open={open} header={'Accept proposal'} onClose={onClick}>
          <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name='message'
              type='text'
              component={CustomFieldLarge}
              label='Message'
              placeholder='Message for the cause'
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
      acceptRequest: ProposalActions.acceptProposalRequest
    })(reduxForm({ form: 'requestAcceptModal', validate })(RequestAcceptModal))
