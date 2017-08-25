import React, { Component } from 'react'
import PageHeader from '../../../core/PageHeader/PageHeader'
import { connect } from 'react-redux'
import UserCard from './UserCard'
import { I18n } from 'react-redux-i18n'

class Page extends Component {
  componentDidMount () {
  }

  users = [ {
    name: 'Ionut',
    id: 1
  }, {
    name: 'Alexandru',
    id: 2
  }, {
    name: 'Mihai',
    id: 3
  }, {
    name: 'Miruna',
    id: 4
  }]

  render () {
    const { users } = this
    return (
      <div className='container' style={{minHeight: '90vh'}}>
        <div className='basic-container'>
          <div style={{paddingBottom: 40}}>
            <PageHeader title={I18n.t('headers.myUsers')} />
            <div className='card-container-layout'>
              {users.map(user => <UserCard key={user.id} user={user} />)}
            </div>
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
