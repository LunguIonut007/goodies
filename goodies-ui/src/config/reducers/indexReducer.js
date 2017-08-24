import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import { i18nReducer } from 'react-redux-i18n'

const combined = combineReducers(
  {
    routing: routerReducer,
    form: formReducer,
    toastr: toastrReducer,
    i18n: i18nReducer,
    login: require('modules/Login/LoginRedux').reducer,
    register: require('modules/Login/RegisterRedux').reducer,
    offers: require('modules/Offer/OfferRedux').reducer,
    causes: require('modules/Cause/CauseRedux').reducer
  }
)

module.exports = combined
