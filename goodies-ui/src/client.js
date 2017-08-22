import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, Redirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './config/stores/indexStore'
import routes from './config/history/routes'
import Layout from './code/modules/layout/Layout'
import LoginPage from './code/modules/Login/LoginPage'
import DashboardDonator from './code/modules/Donator/Dashboard/DashboardDonator'
import DashboardCause from './code/modules/Cause/Dashboard/DashboardCause'
import ReduxToastr from 'react-redux-toastr'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
require('./style/index.scss')

const translationsObject = {
  en: require('./i18n/en.json'),
  ro: require('./i18n/ro.json')
}

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

syncTranslationWithStore(store)
store.dispatch(loadTranslations(translationsObject))
store.dispatch(setLocale('en'))

// TODO !! routes
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
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
        <Redirect from='/' to='login'/>
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
