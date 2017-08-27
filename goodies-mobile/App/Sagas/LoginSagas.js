import { put, call } from 'redux-saga/effects'
import LoginActions from './../Redux/LoginRedux'
import { NavigationActions } from 'react-navigation'

export const login = function * login (api, { username, password }) {
  const response = yield call(api.login, username, password)

  if (response.status === 200) {
    let data = response.data
    data.entityType = data.entityType === 'DONOR' ? 'donator' : 'cause'
    if (data.entityType === 'donator') yield put(LoginActions.loginFailure('Doar cauzele se pot loga'))
    else {
      yield put(LoginActions.loginSuccess(data))
      yield put(NavigationActions.navigate({routeName: 'Tab'}))
    }
  } else {
    yield put(LoginActions.loginFailure('Email sau parola gresita'))
  }
}

export const logout = function * logout (api) {
  const response = yield call(api.logout)

  if (response.status === 200) {
  }
}
