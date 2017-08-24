import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap'

export default class LanguageSwitcherComponent extends Component {
  render () {
    // const { locale, changeLocale } = this.props
    const localeKey = {
      'en': 'English',
      'ro': 'Română'
    }
    return (
      <DropdownButton title='RO' className='language-switcher' id='language-switcher' dropup >
        {['ro', 'en'].map(locale => <MenuItem key={locale} eventKey={locale}>{localeKey[locale]}</MenuItem>)}
      </DropdownButton>
    )
  }
}
