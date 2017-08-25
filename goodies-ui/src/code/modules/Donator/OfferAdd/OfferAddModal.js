import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import Modal from 'core/Modal/ModalComponent'
import {Field, reduxForm} from 'redux-form'
import CustomField from 'core/CustomField/CustomField'
import CustomFieldLarge from 'core/CustomField/CustomFieldLarge'
import OfferActions from 'modules/Offer/OfferRedux'
import { connect } from 'react-redux'

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
  }

  render () {
    const { open } = this.state
    return (
      <div>
        <Button onClick={this.onClick}>Add </Button>
        <Modal open={open} header={'Add offer'} onClose={this.onClick}>
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
              <Button fluid type='button' size='small' className='cancel-button' onClick={this.onClick}>Cancel</Button>
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
