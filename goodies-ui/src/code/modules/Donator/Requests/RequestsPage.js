import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import { connect } from 'react-redux'
import ProposalActions from 'modules/Proposal/ProposalRedux'
import RequestCard from './RequestCard/RequestCard'

class Page extends Component {

  componentDidMount() {
    this.props.getRequests()
  }

  render() {
    const { requests } = this.props
    return (
      <div className='container' style={{minHeight: '90vh'}}>
        <div className='basic-container'>
          <div style={{paddingBottom: 40}}>
          <PageHeader title='Requests from causes' />
          </div>
          <div>
            {requests.map( request => <RequestCard request={request} key={request.id}/>)}
          </div>
        </div>
      </div>

    )
  }
}

export default connect(
  state => ({
    requests: state.proposals.list
  }),
  {
    getRequests: ProposalActions.getProposalsDonorRequest
  }
)(Page)