import { put, call } from 'redux-saga/effects'
import LoginActions from './LoginRedux'

export function * login (api, { username, password }) {

  const response = yield call(api.login, username, password)

  if (response.status === 200) {
    yield put(LoginActions.loginSuccess(response.data))
  } else {
    yield put(LoginActions.loginFailure('login failed'))
  }
}

export function * logout (api) {
  yield call(api.logout)
}