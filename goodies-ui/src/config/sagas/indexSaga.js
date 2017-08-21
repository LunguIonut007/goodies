import { takeLatest,all } from 'redux-saga/effects'
import API from 'api'
//Log in
import { login } from 'modules/Login/LoginSagas'
import { LoginTypes } from 'modules/Login/LoginRedux'

const api = API.create();

export default function * mySaga () {
  yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST,login, api)
  ])
}
