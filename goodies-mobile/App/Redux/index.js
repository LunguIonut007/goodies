import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { reducer as formReducer } from 'redux-form'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require('./NavigationRedux').reducer,
    form: formReducer,
    login: require('./LoginRedux').reducer,
    proposal: require('./ProposalRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
