import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import CardCause from './../CardCause/CardCauseComponent'
import AddModal from './../OfferAdd/OfferAddModal'
import { connect } from 'react-redux'
import CauseActions from 'modules/Cause/CauseRedux'

class DashboardComponent extends Component {
  componentDidMount () {
    this.props.getCauses()
  }

  render () {
    const { causes } = this.props
    return (
      <div className='container'>
        <div>
          <PageHeader title='Dashboard' />
          <AddModal />
          <div className='card-container'>
            {
              causes.map(cause =>
                <CardCause key={cause.id} name={cause.name} shortDescription={cause.address}src={'http://react.semantic-ui.com/assets/images/avatar/large/matthew.png'} />)
            }
          </div>
        </div>
      </div>

    )
  }
}

export default connect(
  state => ({
    causes: state.causes.list
  }),
  {
    getCauses: CauseActions.getCausesRequest
  }
)(DashboardComponent)
