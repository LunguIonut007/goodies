import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import LanguageSwitcher from 'core/LanguageSwitcher/LanguageSwitcher'

export default class FooterComponent extends Component {
  render () {
    return (
      <div className='footer' data-entityType={this.props.entityType}>
        <ul className='social'>
          <div className='facebook'>
            <li>
              <a href='https://www.facebook.com' target='_blank' aria-hidden='true' style={{paddingLeft: 3}}>
                <Icon name='facebook f' />
                <Icon name='facebook f' className='afterIcon' />
              </a>
            </li>
          </div>
          <div className='github'>
            <li>
              <a href='https://github.com' aria-hidden='true' target='_blank' style={{paddingLeft: 3}}>
                <Icon name='github alternate' />
                <Icon name='github alternate' className='afterIcon' />
              </a>
            </li>
          </div>
          <div className='twitter'>
            <li>
              <a href='https://twitter.com' aria-hidden='true' target='_blank' style={{paddingLeft: 3}}>
                <Icon name='twitter' />
                <Icon name='twitter' className='afterIcon' />
              </a>
            </li>
          </div>
          <div className='youtube'>
            <li>
              <a href='https://youtube.com' aria-hidden='true' target='_blank' style={{paddingLeft: 3}}>
                <Icon name='youtube play' />
                <Icon name='youtube play' className='afterIcon' />
              </a>
            </li>
          </div>
          <div className='tumblr'>
            <li>
              <a href='https://tumblr.com' aria-hidden='true' target='_blank' style={{paddingLeft: 3}} >
                <Icon name='tumblr' />
                <Icon name='tumblr' className='afterIcon' />
              </a>
            </li>
          </div>
          <div className='google-plus'>
            <li>
              <a href='https://plus.google.com/' aria-hidden='true' target='_blank' style={{paddingLeft: 3}}>
                <Icon name='google plus' />
                <Icon name='google plus' className='afterIcon' />
              </a>
            </li>
          </div>
        </ul>
        <div className='poweredBy'>
          Powered By SaphireDEVils
        </div>
        <div className='language-switcher-container'>
          <LanguageSwitcher />
        </div>
      </div>

    )
  }
}
