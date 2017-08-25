import React from 'react'
import { Card } from 'semantic-ui-react'

const MyProposalCard = ({proposal}) => (
  <div className='card-margin'>
    <Card className='custom-card-cause'>
      <Card.Content>
        <Card.Header>
          {`Offer title: ${proposal.offer.title}`}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
            {`Short description: ${proposal.offer.description.substring(0, 15)}...`}
          </span>
        </Card.Meta>
        <Card.Description>
          {proposal.message}
        </Card.Description>
      </Card.Content>
      <Card.Content extra />
    </Card>
  </div>
)

export default MyProposalCard
