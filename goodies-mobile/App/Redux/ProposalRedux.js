import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  getAcceptedProposalsRequest: [],
  getAcceptedProposalsError: ['error'],
  getAcceptedProposalsSuccess: ['data'],

  reset: []
})

export const ProposalTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
  error: null,
  saving: false,
  fetching: false,
  list: []
})

export const reducer = createReducer(INITIAL_STATE, {

  GET_ACCEPTED_PROPOSALS_REQUEST: state => state.merge({fetching: true}),
  GET_ACCEPTED_PROPOSALS_SUCCESS: (state, { data }) => state.merge({fetching: false, list: data}),
  GET_ACCEPTED_PROPOSALS_ERROR: (state, {error}) => state.merge({fetching: false, error}),

  RESET: state => INITIAL_STATE
})
