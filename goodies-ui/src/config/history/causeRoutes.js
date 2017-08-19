import Layout from '../../core/containers/layout/Layout'
import DashboardCause from '../../core/containers/Cause/Dashboard/DashboardCause'
// TODO
module.exports = {
  path: 'cause',
  name: 'Cause',
  component: props => <Layout entity='CAUSE'>{props.children}</Layout>,
// indexRoute?
  childRoutes: [
    {
      path: 'dashboard',
      name: 'DashboardDonator',
      component: DashboardCause
    }
  ]
}
