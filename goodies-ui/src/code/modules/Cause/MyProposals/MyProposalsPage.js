import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import { connect } from 'react-redux'
import ProposalActions from 'modules/Proposal/ProposalRedux'
import MyProposalCard from './MyProposalCard'

class Page extends Component {
  componentDidMount () {
    const { getAcceptedProposals } = this.props
    getAcceptedProposals()
  }

  render () {
    const { proposals } = this.props
    return (
      <div className='container' style={{minHeight: '90vh'}}>
        <div className='basic-container'>
          <div style={{paddingBottom: 40}}>
            <PageHeader title='My accepted proposals' />
            <div className='card-container-layout' >
              {proposals.map(proposal => <MyProposalCard key={proposal.id} proposal={proposal} />)}
            </div>
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
    proposals: state.proposals.list
  }),
  {
    getAcceptedProposals: ProposalActions.getAcceptedProposalsRequest,
    reset: ProposalActions.reset
  }
)(Page)
