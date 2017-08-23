// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
// http://localhost:8080/ is the address of the spring server
const create = (baseURL = 'http://localhost:8080/') => {
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
    },
    // 10 second timeout...
    timeout: 10240
  })

  return {
    // a list of the API functions
    login : (username, password) => api.post(`/api_login?username=${username}&password=${password}`),
    logout: () => api.get('/logout'),
    register: data => api.post('/register', data)
  }
}

export default {
  create
}
