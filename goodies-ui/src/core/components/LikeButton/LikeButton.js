import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class LikeButton extends Component {
  render () {
    return (
      <Button
        color='red'
        labelPosition='right'
        content='Like'
        icon='heart'
        label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
            />
    )
  }
}
