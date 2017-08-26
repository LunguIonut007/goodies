import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import validate from './registerValidate'
import RegisterFirstPage from './RegisterFirstPage'
import RegisterSecondPage from './RegisterSecondPageDonor'
import RegisterAddress from './RegisterAddress'

class Register extends Component {
  componentWillMount () {
    this.state = { page: 0 }
  }

  nextPage = () => {
    this.setState(prevState => ({...prevState, page: prevState.page + 1}))
  }

  render () {
    const { page } = this.state
    const { entityType } = this.props
    return (
      <div>
        {page === 0 && <RegisterFirstPage onNext={this.nextPage} entityType={entityType} />}
        {page === 1 && <RegisterSecondPage onNext={this.nextPage} entityType={entityType} />}
        {page === 2 && <RegisterAddress entityType={entityType} />}
      </div>
    )
  }
}

export default connect(
  null, {
  }
)(reduxForm({
  form: 'register',
  validate,
  destroyOnUnmount: false
})(Register))
