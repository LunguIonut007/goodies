import { takeLatest, all } from 'redux-saga/effects'
import API from 'api'
// Log in
import { login, logout, getCurrentUser } from 'modules/Login/LoginSagas'
import { LoginTypes } from 'modules/Login/LoginRedux'

import { register } from 'modules/Login/RegisterSagas'
import { RegisterTypes } from 'modules/Login/RegisterRedux'

import { getOffers, getOwnOffers, saveOffer } from 'modules/Offer/OfferSagas'
import { OfferTypes } from 'modules/Offer/OfferRedux'

import { getCauses } from 'modules/Cause/CauseSagas'
import { CauseTypes } from 'modules/Cause/CauseRedux'

import {
  getProposalsDonor,
  acceptProposal,
  declineProposal,
  saveProposal,
  getAcceptedProposals
} from 'modules/Proposal/ProposalSagas'
import { ProposalTypes } from 'modules/Proposal/ProposalRedux'

const api = API.create()

export default function * mySaga () {
  yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
    takeLatest(LoginTypes.LOGOUT, logout, api),
    takeLatest(RegisterTypes.REGISTER_REQUEST, register, api),
    takeLatest(OfferTypes.GET_OFFERS_REQUEST, getOffers, api),
    takeLatest(CauseTypes.GET_CAUSES_REQUEST, getCauses, api),
    takeLatest(OfferTypes.GET_OWN_OFFERS_REQUEST, getOwnOffers, api),
    takeLatest(OfferTypes.SAVE_OFFER_REQUEST, saveOffer, api),
    takeLatest(ProposalTypes.GET_PROPOSALS_DONOR_REQUEST, getProposalsDonor, api),
    takeLatest(LoginTypes.GET_CURRENT_USER_REQUEST, getCurrentUser, api),
    takeLatest(ProposalTypes.ACCEPT_PROPOSAL_REQUEST, acceptProposal, api),
    takeLatest(ProposalTypes.DECLINE_PROPOSAL_REQUEST, declineProposal, api),
    takeLatest(ProposalTypes.SAVE_PROPOSAL_REQUEST, saveProposal, api),
    takeLatest(ProposalTypes.GET_ACCEPTED_PROPOSALS_REQUEST, getAcceptedProposals, api)
  ])
}
