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

export function * getOwnOffers(api) {
    const response = yield call(api.getOwnOffers)

    if(response.status === 200) {
        yield put(OfferActions.getOwnOffersSuccess(response.data.data))
    } else {
        yield put(OfferActions.getOwnOffersError('error'))
    } 
}

export function * saveOffer(api,{data}) {

    const response = yield call(api.saveOffer,data)

        if(response.status === 200) {
            yield put(OfferActions.saveOfferSuccess())
        } else {
            yield put(OfferActions.saveOfferError('error'))
        } 
}