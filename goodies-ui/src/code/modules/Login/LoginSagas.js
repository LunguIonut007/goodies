import { put, call } from 'redux-saga/effects'
import LoginActions from './LoginRedux'
import { browserHistory } from 'react-router'

export function * login (api, { username, password }) {
  const response = yield call(api.login, username, password)

  if (response.status === 200) {
    let data = response.data
    data.entityType = data.entityType === 'DONOR' ? 'donator' : 'cause'
    yield put(LoginActions.loginSuccess(data))
    browserHistory.push(`${data.entityType}/dashboard`)
  } else {
    yield put(LoginActions.loginFailure('login failed'))
  }
}

export function * getCurrentUser (api) {
  const response = yield call(api.getCurrentUser)

  if (response.status === 200) {
    let data = response.data.data
    data.entityType = data.entityType === 'DONOR' ? 'donator' : 'cause'
    yield put(LoginActions.getCurrentUserSuccess(data))
  } else {
    yield put(LoginActions.getCurrentUserError('login failed'))
  }
}

export function * logout (api) {
  const response = yield call(api.logout)

  if (response.status === 200) {
    browserHistory.push('/login')
  }
}
