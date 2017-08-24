import React, { Component, PropTypes } from 'react'
import { Menu } from 'semantic-ui-react'
import { browserHistory } from 'react-router'

export default class MenuComponent extends Component {
  componentWillMount () {
    this.state = { activeItem: 'Dashboard' }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })

   // find the menuItem with the given name and push it in browserHistory so the client is sent to the new page
    const item = this.props.menuItems.filter(menuItem => name === menuItem.name)[0]

    browserHistory.push(item.path)
  }

  render () {
    const {activeItem} = this.state
    const menuItems = this.props.menuItems.map((item, index) => (
      <Menu.Item
        key={index}
        onClick={this.handleItemClick}
        name={item.name}
        icon={item.icon}
        active={item.name === activeItem}
       />
      ))
    return (
      <Menu vertical data-entityType={this.props.entityType}>
        {menuItems}
      </Menu>
    )
  }
}
MenuComponent.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  pathname: PropTypes.string.isRequired
}
