import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import Footer from '../../core/Footer/FooterComponent'
import Header from '../../core/Header/HeaderComponent'
import Sidebar from '../../core/SideBar/SidebarComponent'

class Layout extends React.Component {
  render () {
    let entityType = 'donor'
    return (
      <div className='content-container' data-entityType={entityType}>
        <Sidebar entityType={entityType} />
        <Header entityType={entityType} />
        {this.props.children} lorem3000
        <Footer entityType={entityType} />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node
}

export default connect()(Layout)
