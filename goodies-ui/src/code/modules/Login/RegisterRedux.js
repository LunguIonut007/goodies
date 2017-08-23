import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    registerRequest: ['payload', 'entityType'],
    registerSuccess: [],
    registerError: ['error']
})

export const RegisterTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
  error: null,
  fetching: false
})

export const reducer = createReducer(INITIAL_STATE, {
    REGISTER_REQUEST: state => state.merge({fetching: true}),
    REGISTER_SUCCESS: state => state.merge({fetching: false}),
    REGISTER_ERROR: (state, {error}) => state.merge({fetching: false,error})
})