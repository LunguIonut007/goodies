import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import Modal from 'core/Modal/ModalComponent'
import {Field, reduxForm} from 'redux-form'
import CustomField from 'core/CustomField/CustomField'
import CustomFieldLarge from 'core/CustomField/CustomFieldLarge'
import OfferActions from 'modules/Offer/OfferRedux'
import { connect } from 'react-redux'
import { I18n } from 'react-redux-i18n'

class CauseAddModal extends Component {
  componentWillMount () {
    this.state = { open: false }
  }

  onClick = () => {
    this.setState({open: !this.state.open})
  }

  onSubmit = data => {
    this.props.saveOffer(data)
    this.onClick()
    this.props.destroy('causeAdd')
  }

  render () {
    const { open } = this.state
    return (
      <div>
        <Button onClick={this.onClick}>{I18n.t('buttons.addOffer')}</Button>
        <Modal open={open} header={I18n.t('headers.addOffer')} onClose={this.onClick}>
          <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name='title'
              type='text'
              component={CustomField}
              label={I18n.t('form.title')}
              placeholder={I18n.t('form.title')}
                />
            <Field
              name='description'
              type='text'
              component={CustomFieldLarge}
              label={I18n.t('form.description')}
              placeholder={I18n.t('form.description')}
                />
            <div className='action-buttons-container'>
              <Button
                fluid
                size='small'
                type='button'
                positive
                className='submit-button'
                onClick={this.props.handleSubmit(this.onSubmit)}
                    >Submit
                    </Button>
              <Button fluid type='button' size='small' className='cancel-button' onClick={this.onClick}>{I18n.t('buttons.cancel')}</Button>
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
      saveOffer: OfferActions.saveOfferRequest
    }
)(reduxForm({ form: 'causeAdd', validate })(CauseAddModal))
