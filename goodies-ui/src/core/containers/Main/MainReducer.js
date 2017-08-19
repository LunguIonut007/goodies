
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
// TODO

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  mainRequest: null,
  mainSuccess: ['payload'],
  mainFailure: ['error'],
  mainClearFailure: null
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
})

/* ------------- Reducers ------------- */

// checking entityType (donator or cause)
export const mainRequest = (state: Object) => state.merge({ fetching: true })

// we get our entityType
export const mainSuccess = (state: Object, { payload: {sessionId, email, firstName, lastName, userId, entityType} }: Object) =>
  state.merge({ fetching: false, error: null, email, firstName, lastName, sessionId, userId, entityType })

// we haven't got any entity or other errors
export const mainFailure = (state: Object, { error }: Object) =>
  state.merge({ fetching: false, error, sessionId: null })

export const mainClearFailure = (state: Object) =>
 state.merge({ error: null })


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MAIN_REQUEST]: mainRequest,
  [Types.MAIN_SUCCESS]: mainSuccess,
  [Types.MAIN_FAILURE]: mainFailure,
})
