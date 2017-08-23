import { takeLatest,all } from 'redux-saga/effects'
import API from 'api'
//Log in
import { login, logout } from 'modules/Login/LoginSagas'
import { LoginTypes } from 'modules/Login/LoginRedux'

import { register } from 'modules/Login/RegisterSagas'
import { RegisterTypes } from 'modules/Login/RegisterRedux'
const api = API.create();

export default function * mySaga () {
  yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST,login, api),
    takeLatest(LoginTypes.LOGOUT, logout, api),
    takeLatest(RegisterTypes.REGISTER_REQUEST, register, api)
  ])
}
