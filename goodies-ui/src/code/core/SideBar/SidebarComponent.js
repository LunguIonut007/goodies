import React, { Component } from 'react'
import Avatar from '../Avatar/AvatarComponent'
import Menu from '../Menu/MenuComponent'
import { connect } from 'react-redux'
import LoginActions from 'modules/Login/LoginRedux'
import { I18n } from 'react-redux-i18n'

class SidebarComponent extends Component {
  componentDidMount () {
    const { getUser, email } = this.props
    if (!email) getUser()
  }

  donorMenu = [
    { name: I18n.t(`menu.dashboard`), path: '/donator/dashboard' },
    { name: I18n.t('menu.myOffers'), path: '/donator/myOffers' },
    {name: I18n.t('menu.request'), path: '/donator/requests'}]

  causeMenu = [
    { name: I18n.t(`menu.dashboard`), path: '/cause/dashboard' },
    { name: I18n.t('menu.myProposals'), path: '/cause/myProposals' },
    {name: I18n.t('menu.myUsers'), path: '/cause/myUsers'}]

  render () {
    const { entityType, email, activePath } = this.props
    return (
      <div className='sidebar' data-entityType={entityType}>
        <Avatar src='https://react.semantic-ui.com/assets/images/avatar/large/rachel.png' entityType={entityType} side='25vh' />
        <div className='user-name'>
          {email}
        </div>
        <Menu
          menuItems={entityType === 'cause' ? this.causeMenu : this.donorMenu}
          pathname={activePath}
          entityType={entityType} />
      </div>
    )
  }
}

export default connect(state => ({
  email: state.login.email,
  activePath: state.routing.locationBeforeTransitions.pathname
}), {
  getUser: LoginActions.getCurrentUserRequest
})(SidebarComponent)
