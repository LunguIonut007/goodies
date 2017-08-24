import React, { Component } from 'react'
import  { Button, Card } from 'semantic-ui-react'

export default class CardComponent extends Component {
  render () {
    const { request } = this.props
    return (
      <Card>
            <Card.Content header={'dadsa'} />
              <Card.Content description={'dasdsa'} className="text" />
              <Card.Content extra>
          </Card.Content>
      </Card>
    )
  }
}