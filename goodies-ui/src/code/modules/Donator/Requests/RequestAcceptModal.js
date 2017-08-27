import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import Modal from 'core/Modal/ModalComponent'
import {Field, reduxForm} from 'redux-form'
import CustomFieldLarge from 'core/CustomField/CustomFieldLarge'
import { connect } from 'react-redux'
import ProposalActions from 'modules/Proposal/ProposalRedux'
import { I18n } from 'react-redux-i18n'

class RequestAcceptModal extends Component {
  onSubmit = payload => {
    const { acceptRequest, request, onClick } = this.props
    acceptRequest(request.id, payload)
    onClick()
    this.props.destroy('causeAdd')
  }

  render () {
    const { open, onClick } = this.props

    return (
      <div>
        <Modal open={open} header={I18n.t('headers.acceptProposal')} onClose={onClick}>
          <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name='message'
              type='text'
              component={CustomFieldLarge}
              label={I18n.t('form.message')}
              placeholder={I18n.t('form.messagePlaceholder')}
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
              <Button fluid type='button' size='small' className='cancel-button' onClick={onClick}>{I18n.t('buttons.cancel')}</Button>
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
