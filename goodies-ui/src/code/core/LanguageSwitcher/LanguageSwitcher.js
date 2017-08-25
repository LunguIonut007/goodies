import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLocale } from 'react-redux-i18n'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class LanguageSwitcherComponent extends Component {
  localeKey = {
    'en': 'English',
    'ro': 'Română'
  }
  onClick = (eventKey) => {
    const { setLocale } = this.props
    setLocale(eventKey)
  }
  render () {
    return (
      <DropdownButton title='RO' className='language-switcher' id='language-switcher' dropup>
        {['ro', 'en'].map(locale =>
          <MenuItem key={locale} eventKey={locale} onSelect={this.onClick}>{this.localeKey[locale]}</MenuItem>)}
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
