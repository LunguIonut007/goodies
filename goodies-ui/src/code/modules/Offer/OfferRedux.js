import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    getOffersRequest: [],
    getOffersSuccess: ['data'],
    getOffersError: ['error']
})

export const OfferTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
  error: null,
  fetching: false
})

export const reducer = createReducer(INITIAL_STATE, {
    GET_OFFERS_REQUEST: state => state.merge({fetching: true}),
    GET_OFFERS_SUCCESS: (state, { data }) => state.merge({fetching: false, ...data}),
    GET_OFFERS_ERROR: (state, {error}) => state.merge({fetching: false,error})
})