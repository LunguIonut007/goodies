import { put, call } from 'redux-saga/effects'
import LoginActions from './LoginRedux'
import { browserHistory } from 'react-router'

export function * login (api, { username, password }) {
  const response = yield call(api.login, username, password)

  if (response.status === 200) {
    yield put(LoginActions.loginSuccess(response.data))
    const entityType = response.data.entityType.toLowerCase() === 'organization_admin' ? 'cause' : 'donator'
    browserHistory.push(`${entityType}/dashboard`)
  } else {
    yield put(LoginActions.loginFailure('login failed'))
  }
}

export function * getCurrentUser (api) {
  const response = yield call(api.getCurrentUser)

  if (response.status === 200) {
    yield put(LoginActions.getCurrentUserSuccess(response.data.data))
  } else {
    yield put(LoginActions.getCurrentUserFailure('login failed'))
  }
}

export function * logout (api) {
  const response = yield call(api.logout)

  if (response.status === 200) {
    browserHistory.push('/login')
  }
}
