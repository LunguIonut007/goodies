import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import Footer from '../../components/Footer/FooterComponent'
import Header from '../../components/Header/HeaderComponent'
import Sidebar from '../../components/SideBar/SidebarComponent'

class Layout extends React.Component {
  render () {
    let entityType = 'cause'
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
