import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import LoginActions from 'modules/Login/LoginRedux'

class LogoutButton extends Component {
  onLogoutClick = () => {
    this.props.logout();
  }
  render () {
    return (
      <div className='logoutButton-container' data-entityType={this.props.entityType}>
        <Button circular icon='log out' onClick={this.onLogoutClick} />
      </div>
    )
  }
}

export default connect(null, { logout: LoginActions.logout })(LogoutButton)