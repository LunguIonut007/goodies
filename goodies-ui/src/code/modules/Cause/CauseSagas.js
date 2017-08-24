import { put, call } from 'redux-saga/effects'
import CauseActions from './CauseRedux'

export function * getCauses(api) {

    const response = yield call(api.getCauses)

    if(response.status === 200) {
        yield put(CauseActions.getCausesSuccess(response.data.data))
    } else {
        yield put(CauseActions.getCausesError('error'))
    }
}