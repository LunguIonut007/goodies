import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import { I18n } from 'react-redux-i18n'

export default class SearchBarComponent extends Component {
  render () {
    return (
      <div className='box' data-entityType={this.props.entityType} >
        <div className='container-2' data-entityType={this.props.entityType}>
          <input type='search' className='search' placeholder={I18n.t('form.search')} />
          <div style={{display: 'flex'}}>
            <Icon name='search' className='button' />
          </div>
        </div>
      </div>

    )
  }
}
