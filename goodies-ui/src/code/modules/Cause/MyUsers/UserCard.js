import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const UserCard = ({user}) => (
  <div className='card-margin'>
    <Card className='user-card'>
      <Image src='http://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
      <Card.Content>
        <Card.Header>
          {user.name}
        </Card.Header>
        <Card.Meta>
          <span className='date'>
          Joined in 2015
        </span>
        </Card.Meta>
        <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
        22 Friends
      </a>
      </Card.Content>
    </Card>
  </div>
)

export default UserCard