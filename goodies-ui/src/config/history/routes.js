import Login from '../../core/containers/Login/LoginPage'
import syncAuthCheck from '../../core/containers/Main/MainReducer'
import Main from '../../core/containers/Main/Main'
import donatorRoutes from './donatorRoutes'
import causeRoutes from './causeRoutes'

// TODO
export default {
  path: '/',
  component: Main,
  // checking for entity/loggin in
  // onEnter: syncAuthCheck,
  // indexRoute: { onEnter: (nextState, replace) => replace({name: 'Community'}) },
  childRoutes: [
    {path: 'login', name: 'Login', component: Login},
    ...donatorRoutes,
    ...causeRoutes
    // {path: '*', component: NotFound}
  ]
}
