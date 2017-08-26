import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['payload'],
  loginFailure: ['error'],
  logout: null,

  getCurrentUserRequest: [],
  getCurrentUserSuccess: ['payload'],
  getCurrentUserError: ['error']
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

const INITIAL_STATE = Immutable({
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

const request = state => state.merge({ fetching: true })
const success = (state, { payload }) => state.merge({ fetching: false, error: null, ...payload })
const failure = (state, { error }) => state.merge({ fetching: false, error, headers: null })
const logout = (state) => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout,

  [Types.GET_CURRENT_USER_REQUEST]: state => state.merge({ fetching: true }),
  [Types.GET_CURRENT_USER_SUCCESS]: (state, { payload }) => state.merge({ fetching: false, error: null, ...payload }),
  [Types.GET_CURRENT_USER_ERROR]: (state, { error }) => state.merge({ fetching: false, error, headers: null })
})
