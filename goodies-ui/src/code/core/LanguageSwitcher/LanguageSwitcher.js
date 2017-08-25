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
    localStorage.setItem('language', eventKey)
    setLocale(eventKey)
    location.reload()
  }
  render () {
    const { locale } = this.props
    return (
      <DropdownButton title={locale} className='language-switcher' id='language-switcher' dropup>
        {['ro', 'en'].map(locale =>
          <MenuItem key={locale} eventKey={locale} onSelect={this.onClick}>{this.localeKey[locale]}</MenuItem>)}
      </DropdownButton>
    )
  }
}

export default connect(
  state => ({
    locale: state.i18n.locale
  }), {
    setLocale
  }
)(LanguageSwitcherComponent)
