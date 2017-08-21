import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const combined = combineReducers(
  {
    routing: routerReducer,
    form: formReducer,
    login: require('./../../code/modules/Login/LoginRedux').reducer
  }
)

module.exports = combined
