import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ProposalActions from 'modules/Proposal/ProposalRedux'
import { I18n } from 'react-redux-i18n'

class CardComponent extends Component {
  onClick = () => {
    const { offer, saveProposal } = this.props
    saveProposal({offerId: offer.id})
  }

  render () {
    const { offer, entityType } = this.props

    return (
      <div className='card-margin'>
        <Card className={`card-offer-${entityType}`}>
          <Card.Content header={offer.title} />
          <Card.Content description={offer.description} className='text' />
          <Card.Content extra>
            {offer.requested !== undefined && !offer.proposal &&
            <Button
              icon={offer.requested && 'checkmark'}
              content={I18n.t('buttons.request')}
              size='tiny'
              onClick={this.onClick}
              fluid disabled={offer.requested} />}
            {offer.proposal && offer.proposal.pending && <Button content={I18n.t('buttons.pending')} size='tiny' disabled fluid />}
            {offer.proposal && !offer.proposal.pending &&
              <Button content={offer.proposal.accepted ? I18n.t('buttons.accepted') : I18n.t('buttons.declined')} disabled size='tiny' fluid />}
          </Card.Content>
        </Card>
      </div>
    )
  }
}
export default connect(
  state => ({
  }),
  {
    saveProposal: ProposalActions.saveProposalRequest
  }
)(CardComponent)
