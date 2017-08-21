import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

const combined = combineReducers(
  {
    routing: routerReducer,
    form: formReducer,
    toastr: toastrReducer,
    login: require('./../../code/modules/Login/LoginRedux').reducer
  }
)

module.exports = combined
