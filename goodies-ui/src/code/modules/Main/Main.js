import React, { Component } from 'react'
// TODO
export default class MainComponent extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
