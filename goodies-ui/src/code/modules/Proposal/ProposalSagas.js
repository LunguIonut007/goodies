import { put, call } from 'redux-saga/effects'
import ProposalActions from './ProposalRedux'

export function * getProposalsDonor(api) {

    const response = yield call(api.getProposalsDonor)

    if(response.status === 200) {
        yield put(ProposalActions.getProposalsDonorSuccess(response.data.data))
    } else {
        yield put(ProposalActions.getProposalsDonorError('error'))
    }
}

export function * saveProposal(api,{data}) {

    const response = yield call(api.saveProposal,data)

        if(response.status === 200) {
            yield put(ProposalActions.saveProposalSuccess())
        } else {
            yield put(ProposalActions.saveProposalSuccess('error'))
        } 
}