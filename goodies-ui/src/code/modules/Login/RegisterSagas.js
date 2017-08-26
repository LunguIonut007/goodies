import { put, call } from 'redux-saga/effects'
import RegisterActions from './RegisterRedux'
import LoginActions from './LoginRedux'

export function * register (api, { payload, entityType }) {
  const { email, name, password, address, adminName, phone, description } = payload

  let data = { user: { email, password, name } }
  let type = entityType === 'cause' ? 'organization' : 'donor'
  if (type === 'organization') {
    data[type] = { address, phone, adminName, description }
  } else {
    data[type] = { address, phone }
  }

  console.log(data)
  const response = yield call(api.register, data)
  console.log(response)
  if (response.status === 200) {
    yield put(RegisterActions.registerSuccess())
    console.log(password)
    yield put(LoginActions.loginRequest(email, password))
  } else {
    yield put(RegisterActions.registerError('error'))
  }
}
