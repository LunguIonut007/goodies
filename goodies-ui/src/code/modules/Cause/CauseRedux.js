import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    getCausesRequest: [],
    getCausesSuccess: ['data'],
    getCausesError: ['error']
})

export const CauseTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
  error: null,
  fetching: false,
  list: []
})

export const reducer = createReducer(INITIAL_STATE, {
    GET_CAUSES_REQUEST: state => state.merge({fetching: true}),
    GET_CAUSES_SUCCESS: (state, { data }) => state.merge({fetching: false, list:data}),
    GET_CAUSES_ERROR: (state, {error}) => state.merge({fetching: false,error})
})