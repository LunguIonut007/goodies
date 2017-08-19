import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './config/stores/indexStore'
import routes from './config/history/routes'
import Layout from './core/containers/layout/Layout'
import LoginPage from './core/containers/Login/LoginPage'
import DashboardDonator from './core/containers/Donator/Dashboard/DashboardDonator'
import DashboardCause from './core/containers/Cause/Dashboard/DashboardCause'

require('./style/index.scss')

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch({ type: 'TEST', payload: 3 })
// TODO !! routes
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      {/* comment pentru ca nu merge
      <Router history={history} routes={routes} /> */}
      <Router history={history}>
        <Route path='login' component={LoginPage} />
        <Route path='donator' component={Layout}>
          <Route path='dashboard' component={DashboardDonator} />
        </Route>
        <Route path='cause' component={Layout}>
          <Route path='dashboard' component={DashboardCause} />
        </Route>
      </Router>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)
