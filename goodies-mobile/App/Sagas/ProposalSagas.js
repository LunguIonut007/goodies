import { put, call } from 'redux-saga/effects'
import ProposalActions from './../Redux/ProposalRedux'

export const getAcceptedProposals = function * getAcceptedProposals (api) {
  const response = yield call(api.getAcceptedProposals)
  if (response.status === 200) {
    yield put(ProposalActions.getAcceptedProposalsSuccess(response.data.data))
  } else {
    yield put(ProposalActions.getAcceptedProposalsError('error'))
  }
}
