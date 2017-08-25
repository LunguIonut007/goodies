import { put, call } from 'redux-saga/effects'
import ProposalActions from './ProposalRedux'
import OfferActions from './../Offer/OfferRedux'

export function * getProposalsDonor (api) {
  const response = yield call(api.getProposalsDonor)

  if (response.status === 200) {
    yield put(ProposalActions.getProposalsDonorSuccess(response.data.data))
  } else {
    yield put(ProposalActions.getProposalsDonorError('error'))
  }
}

export function * saveProposal (api, {payload}) {
  const response = yield call(api.saveProposal, payload)

  if (response.status === 200) {
    yield put(ProposalActions.saveProposalSuccess())
    yield put(OfferActions.getOffersRequest())
  } else {
    yield put(ProposalActions.saveProposalSuccess('error'))
  }
}

export function * declineProposal (api, { proposalId }) {
  const response = yield call(api.declineProposal, proposalId)

  if (response.status === 200) {
    yield put(ProposalActions.getProposalsDonorRequest())
    yield put(ProposalActions.declineProposalSuccess())
  } else {
    yield put(ProposalActions.declineProposalError('error'))
  }
}

export function * acceptProposal (api, { payload, proposalId }) {
  const response = yield call(api.acceptProposal, proposalId, payload)
  if (response.status === 200) {
    yield put(ProposalActions.acceptProposalSuccess())
    yield put(ProposalActions.getProposalsDonorRequest())
  } else {
    yield put(ProposalActions.declineProposalError('error'))
  }
}

export function * getAcceptedProposals (api) {
  const response = yield call(api.getAcceptedProposals)
  if (response.status === 200) {
    yield put(ProposalActions.getAcceptedProposalsSuccess(response.data.data))
  } else {
    yield put(ProposalActions.getAcceptedProposalsError('error'))
  }
}
