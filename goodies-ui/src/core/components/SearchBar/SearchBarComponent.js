import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
export default class SearchBarComponent extends Component {
  render () {
    return (
      <div className='box' data-entityType={this.props.entityType} >
        <div className='container-2' data-entityType={this.props.entityType}>
          <input type='search' className='search' placeholder='Search...' />
          <div style={{display: 'flex'}}>
            <Icon name='search' className='button' />
          </div>
        </div>
      </div>

    )
  }
}
