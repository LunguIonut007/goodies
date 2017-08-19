import React, { Component } from 'react'

export default class CardComponent extends Component {
  render () {
    return (
      <div className='page-header'>
        {this.props.title}
      </div>
    )
  }
}
