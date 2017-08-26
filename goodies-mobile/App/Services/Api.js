// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'http://192.168.0.104:8080') => {
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 1000
  })
  return {
    // a list of the API functions from step 2
    login: (username, password) => api.post(`/api_login?username=${username}&password=${password}`),
    logout: () => api.get('/logout'),
    register: data => api.post('/register', data),
    getOffers: () => api.get('/offer'),
    getCauses: () => api.get('/cause'),
    getOwnOffers: () => api.get('/offer/getOwn'),
    saveOffer: data => api.post('/offer', data),
    getProposalsDonor: () => api.get('/proposal/getOwn'),
    saveProposal: data => api.post('/proposal/create', data),
    getCurrentUser: () => api.get('/user'),
    declineProposal: proposalId => api.post(`/proposal/${proposalId}/deny`),
    acceptProposal: (proposalId, payload) => api.post(`/proposal/${proposalId}/accept`, payload),
    getAcceptedProposals: () => api.get('/proposal/getAccepted')
  }
}

// let's return back our create method as the default.
export default {
  create
}
