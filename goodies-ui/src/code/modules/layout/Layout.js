import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import Footer from '../../core/Footer/FooterComponent'
import Header from '../../core/Header/HeaderComponent'
import Sidebar from '../../core/SideBar/SidebarComponent'

class Layout extends React.Component {
  render () {
    const { entityType } = this.props

    return (
      <div className='content-container' data-entityType={entityType}>
        <Sidebar entityType={entityType} />
        <Header entityType={entityType} />
        {this.props.children}
        <Footer entityType={entityType} />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node
}

const getType = path => {
  if(path.indexOf('donator') !== -1) return 'donor';
  else return 'cause';
}

export default connect( state => ({
  entityType: getType(state.routing.locationBeforeTransitions.pathname)
}), null)(Layout)
