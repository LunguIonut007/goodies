import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'
import RequestAcceptModal from './../RequestAcceptModal'
import { connect } from 'react-redux'
import ProposalActions from 'modules/Proposal/ProposalRedux'
import { I18n } from 'react-redux-i18n'

class CardComponent extends Component {
  onClick = () => {
    this.setState({open: !this.state.open})
  }

  componentWillMount () {
    this.state = { open: false }
  }

  decline = () => {
    const { declineRequest, request } = this.props
    declineRequest(request.id)
  }

  render () {
    const { request } = this.props
    return (
      <div className='card-margin'>
        <Card className='request-card'>
          <RequestAcceptModal open={this.state.open} request={request} onClick={this.onClick} />
          <Card.Content header={`${I18n.t('requestCard.requestFrom')} ${request.organization.userName}`} />
          <Card.Content
            description={`${I18n.t('requestCard.offerTitle')} ${request.offer.title}`}
            className='text'
                />
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button color='green' disabled={!request.pending} onClick={this.onClick}>{I18n.t('buttons.approve')}</Button>
              <Button color='red' disabled={!request.pending} onClick={this.decline}>{I18n.t('buttons.decline')}</Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default connect(state => ({

}), {
  declineRequest: ProposalActions.declineProposalRequest
})(CardComponent)
