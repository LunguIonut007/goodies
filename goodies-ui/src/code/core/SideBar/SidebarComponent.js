import React, { Component } from 'react'
import Avatar from '../Avatar/AvatarComponent'
import Menu from '../Menu/MenuComponent'
import { connect } from 'react-redux'
import LoginActions from 'modules/Login/LoginRedux'

class SidebarComponent extends Component {
  componentDidMount () {
    const { getUser, email } = this.props
    if (!email) getUser()
  }

  donorMenu = [
    { name: 'Dashboard', path: '/donator/dashboard' },
    { name: 'My Offers', path: '/donator/myOffers' },
    {name: 'Requests', path: '/donator/requests'}]

  causeMenu = [
    { name: 'Dashboard', path: '/cause/dashboard' },
    { name: 'My Proposals', path: '/cause/myProposals' },
    {name: 'My Users', path: '/cause/myUsers'}]

  render () {
    const { entityType, email } = this.props
    return (
      <div className='sidebar' data-entityType={entityType}>
        <Avatar src='https://react.semantic-ui.com/assets/images/avatar/large/rachel.png' entityType={entityType} side='25vh' />
        <div className='user-name'>
          {email}
        </div>
        <Menu menuItems={entityType === 'cause' ? this.causeMenu : this.donorMenu} pathname='dashboard' entityType={entityType} />
      </div>
    )
  }
}

export default connect(state => ({
  email: state.login.email
}), {
  getUser: LoginActions.getCurrentUserRequest
})(SidebarComponent)
