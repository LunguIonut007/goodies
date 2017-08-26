import { put, call } from 'redux-saga/effects'
import LoginActions from './../Redux/LoginRedux'
import { NavigationActions } from 'react-navigation'

export const login = function * login (api, { username, password }) {
  console.log('111')
  const response = yield call(api.login, username, password)
  console.log(response)
  if (response.status === 200) {
    let data = response.data
    data.entityType = data.entityType === 'DONOR' ? 'donator' : 'cause'
    yield put(LoginActions.loginSuccess(data))
    yield put(NavigationActions.navigate({routeName: 'Tab'}))
  } else {
    yield put(LoginActions.loginFailure('login failed'))
  }
}

export const logout = function * logout (api) {
  const response = yield call(api.logout)

  if (response.status === 200) {
  }
}
