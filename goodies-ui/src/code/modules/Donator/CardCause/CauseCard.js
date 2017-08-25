import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CauseCard = ({cause}) => (
  <div className='card-margin'>
    <Card className='cause-card'>
      <Image className='' src='http://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
      <Card.Content>
        <Card.Header>
          {cause.user.name}
        </Card.Header>
        <Card.Description>
          {cause.address}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {cause.user.email}
        </a>
      </Card.Content>
    </Card>
  </div>
)

export default CauseCard
