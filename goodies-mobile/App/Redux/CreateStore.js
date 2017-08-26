import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import Config from '../Config/DebugConfig'
import createSagaMiddleware from 'redux-saga'
import RehydrationServices from '../Services/RehydrationServices'
import ReduxPersist from '../Config/ReduxPersist'
import ScreenTracking from './ScreenTrackingMiddleware'
import { createLogger } from 'redux-logger'
import R from 'ramda'
// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking)

  /* ------------- Saga Middleware ------------- */
  console.log(console.tron)
  const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED','@@redux-form/SET_SUBMIT_SUCCEEDED', 'EFFECT_REJECTED', 'persist/REHYDRATE', '@@redux-form/BLUR', '@@redux-form/CHANGE', '@@redux-form/TOUCH', '@@redux-form/REGISTER_FIELD', '@@redux-form/FOCUS']

  if (__DEV__) {
    const USE_LOGGING = Config.reduxLogging
        // the predicate silences the saga based messages
    const logger = createLogger({
      predicate: (getState, { type }) => USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST))
    })
    middleware.push(logger)
  }

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate())
  }

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store)
  }

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}
