import { put, call } from 'redux-saga/effects'
import RegisterActions from './RegisterRedux'

export function * register(api, { payload: {username, email, name, password}, entityType }) {

    let data = { user: { email, username, password, name } }
    let type = entityType === 'cause' ? 'organization' : 'donor'
    data[type] = { 'address': '123 streen', phone: '00011122233', 'adminName': 'ME' }
    const response = yield call(api.register, data)

    if(response.status === 200) {
        yield put(RegisterActions.registerSuccess())
    } else {
        yield put(RegisterActions.registerError('error'))
    }
}