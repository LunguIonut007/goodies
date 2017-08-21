import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './config/stores/indexStore'
import routes from './config/history/routes'
import Layout from './code/modules/layout/Layout'
import LoginPage from './code/modules/Login/LoginPage'
import DashboardDonator from './code/modules/Donator/Dashboard/DashboardDonator'
import DashboardCause from './code/modules/Cause/Dashboard/DashboardCause'
import ReduxToastr from 'react-redux-toastr'
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
      <div>
      <ReduxToastr
        timeOut={4000}
        newestOnTop
        preventDuplicates
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
      <Router history={history}>
        <Route path='login' component={LoginPage} />
        <Route path='donator' component={Layout}>
          <Route path='dashboard' component={DashboardDonator} />
        </Route>
        <Route path='cause' component={Layout}>
          <Route path='dashboard' component={DashboardCause} />
        </Route>
      </Router>
     </div>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)
