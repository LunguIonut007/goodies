import React, { Component } from 'react'
import { connect } from 'react-redux'
import RegisterCause from './Register/RegisterCause'
import RegisterDonor from './Register/RegisterDonor'

class Register extends Component {
  render () {
    const { entityType } = this.props

    return (
      <div>
        {entityType === 'cause' ? <RegisterCause entityType={entityType} /> : <RegisterDonor entityType={entityType} />}
      </div>
    )
  }
}

export default connect(
  state => ({
  }), {
  }
)(Register)
