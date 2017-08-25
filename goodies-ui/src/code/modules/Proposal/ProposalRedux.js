import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  getProposalsDonorRequest: [],
  getProposalsDonorSuccess: ['data'],
  getProposalsDonorError: ['error'],

  saveProposalRequest: ['payload'],
  saveProposalSuccess: [],
  savePRoposalError: ['error'],

  acceptProposalRequest: ['proposalId', 'payload'],
  acceptProposalSuccess: [],
  acceptProposalError: ['error'],

  declineProposalRequest: ['proposalId'],
  declineProposalSuccess: [],
  declineProposalError: ['error']
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
  GET_PROPOSALS_DONOR_REQUEST: state => state.merge({fetching: true}),
  GET_PROPOSALS_DONOR_SUCCESS: (state, { data }) => state.merge({fetching: false, list: data}),
  GET_PROPOSALS_DONOR_ERROR: (state, {error}) => state.merge({fetching: false, error}),

  SAVE_PROPOSAL_REQUEST: state => state.merge({saving: true}),
  SAVE_PROPOSAL_SUCCESS: state => state.merge({saving: false}),
  SAVE_PROPOSAL_ERROR: (state, {error}) => state.merge({saving: false, error}),

  ACCEPT_PROPOSAL_REQUEST: state => state.merge({saving: true}),
  ACCEPT_PROPOSAL_SUCCESS: state => state.merge({saving: false}),
  ACCEPT_PROPOSAL_ERROR: (state, {error}) => state.merge({saving: false, error}),

  DECLINE_PROPOSAL_REQUEST: state => state.merge({saving: true}),
  DECLINE_PROPOSAL_SUCCESS: state => state.merge({saving: false}),
  DECLINE_PROPOSAL_ERROR: (state, {error}) => state.merge({saving: false, error})
})
