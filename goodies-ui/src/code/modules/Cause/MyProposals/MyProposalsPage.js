import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import { connect } from 'react-redux'

class Page extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className='container' style={{minHeight: '90vh'}}>
        <div className='basic-container'>
          <div style={{paddingBottom: 40}}>
          <PageHeader title='My proposals' />
          </div>
        </div>
      </div>

    )
  }
}

export default connect(
  state => ({
  }),
  {
  }
)(Page)