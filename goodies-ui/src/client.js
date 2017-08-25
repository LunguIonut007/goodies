import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, Redirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './config/stores/indexStore'
import Layout from './code/modules/layout/Layout'
import LoginPage from './code/modules/Login/LoginPage'
import DashboardDonator from './code/modules/Donator/Dashboard/DashboardDonator'
import DashboardCause from './code/modules/Cause/Dashboard/DashboardCause'
import MyOffers from 'donator/MyOffers/MyOffersPage'
import Requests from 'donator/Requests/RequestsPage'
import MyProposals from 'cause/MyProposals/MyProposalsPage'
import MyUsers from 'cause/MyUsers/MyUsersPage'
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
let lang = localStorage.getItem('language')
if (!lang) { lang = 'en'; localStorage.setItem('language', 'en') }
store.dispatch(setLocale(lang))

// TODO !! routes
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <div>
        <ReduxToastr
          timeOut={4000}
          newestOnTop
          preventDuplicates
          position='top-right'
          transitionIn='fadeIn'
          transitionOut='fadeOut'
      />
        <Router history={history}>
          <Redirect from='/' to='login' />
          <Route path='login' component={LoginPage} />
          <Route path='donator' component={Layout}>
            <Route path='dashboard' component={DashboardDonator} />
            <Route path='myOffers' component={MyOffers} />
            <Route path='requests' component={Requests} />
          </Route>
          <Route path='cause' component={Layout}>
            <Route path='dashboard' component={DashboardCause} />
            <Route path='myProposals' component={MyProposals} />
            <Route path='myUsers' component={MyUsers} />
          </Route>
        </Router>
      </div>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)
