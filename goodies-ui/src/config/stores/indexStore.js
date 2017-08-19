import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from './../reducers/indexReducer'
import mySaga from './../sagas/indexSaga'

function reduxStore (initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(
    promiseMiddleware({
      promiseTypeSuffixes: ['loading', 'success', 'error']
    }),
    thunk,
    sagaMiddleware
  )))

  sagaMiddleware.run(mySaga)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/indexReducer', () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require('../reducers/indexReducer.js')  // eslint-disable-line global-require

      store.replaceReducer(nextReducer)
    })
  }
  return store
}

export default reduxStore
