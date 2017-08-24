import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    getOffersRequest: [],
    getOffersSuccess: ['data'],
    getOffersError: ['error'],

    getOwnOffersRequest: [],
    getOwnOffersSuccess: ['data'],
    getOwnOffersError: ['error'],

    saveOfferRequest: ['data'],
    saveOfferSuccess: [],
    saveOfferError: ['error']
})

export const OfferTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
  error: null,
  saving: false,
  fetching: false,
  list: []
})

export const reducer = createReducer(INITIAL_STATE, {
    GET_OFFERS_REQUEST: state => state.merge({fetching: true}),
    GET_OFFERS_SUCCESS: (state, { data }) => state.merge({fetching: false, list:data}),
    GET_OFFERS_ERROR: (state, {error}) => state.merge({fetching: false,error}),

    // Uses the same as get offers because they can't be at the same time called
    GET_OWN_OFFERS_REQUEST: state => state.merge({fetching: true}),
    GET_OWN_OFFERS_SUCCESS: (state, { data }) => state.merge({fetching: false, list:data}),
    GET_OWN_OFFERS_ERROR: (state, {error}) => state.merge({fetching: false,error}),

    SAVE_OFFER_REQUEST: state => state.merge({fetching: true}),
    SAVE_OFFER_SUCCESS: state => state.merge({fetching: false}),
    SAVE_OFFER_ERROR: (state, {error}) => state.merge({fetching: false,error}),
})