import { put, call } from 'redux-saga/effects'
import OfferActions from './OfferRedux'

export function * getOffers(api) {

    const response = yield call(api.getOffers)
    console.log(response)
    if(response.status === 200) {
        yield put(OfferActions.getOffersSuccess(response.data))
    } else {
        yield put(OfferActions.getOffersError('error'))
    }
}