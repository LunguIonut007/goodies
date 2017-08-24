import { put, call } from 'redux-saga/effects'
import OfferActions from './OfferRedux'

export function * getOffers(api) {

    const response = yield call(api.getOffers)

    if(response.status === 200) {
        yield put(OfferActions.getOffersSuccess(response.data.data))
    } else {
        yield put(OfferActions.getOffersError('error'))
    }
}