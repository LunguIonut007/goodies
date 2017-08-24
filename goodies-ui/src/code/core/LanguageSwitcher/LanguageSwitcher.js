import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLocale } from 'react-router-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class LanguageSwitcherComponent extends Component {
  localeKey = {
    'en': 'English',
    'ro': 'Română'
  }
  onClick = event => {
    console.log('click')
  }
  render () {
    // const { setLocale } = this.props
    return (
      <DropdownButton title='RO' className='language-switcher' id='language-switcher' dropup>
        {['ro', 'en'].map(locale =>
          <MenuItem key={locale} eventKey={locale} onClick={this.onClick}>{this.localeKey[locale]}</MenuItem>)}
      </DropdownButton>
    )
  }
}

export default connect(
  state => ({

  }), {
    setLocale
  }
)(LanguageSwitcherComponent)
