import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import { connect } from 'react-redux'
import ProposalActions from 'modules/Proposal/ProposalRedux'
import RequestCard from './RequestCard/RequestCard'
import { I18n } from 'react-redux-i18n'

class Page extends Component {
  componentDidMount () {
    this.props.getRequests()
  }

  render () {
    const { requests } = this.props
    return (
      <div className='container' style={{minHeight: '90vh'}}>
        <div className='basic-container'>
          <div style={{paddingBottom: 40}}>
            <PageHeader title={I18n.t('headers.requests')} />
          </div>
          <div className='card-container-layout'>
            {requests.map(request => <RequestCard request={request} key={request.id} />)}
          </div>
        </div>
      </div>

    )
  }

  componentWillUnmount () {
    this.props.reset()
  }
}

export default connect(
  state => ({
    requests: state.proposals.list
  }),
  {
    getRequests: ProposalActions.getProposalsDonorRequest,
    reset: ProposalActions.reset
  }
)(Page)
