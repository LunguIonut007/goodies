import Layout from '../../code/modules/layout/Layout'
import DashboardCause from '../../code/modules/Cause/Dashboard/DashboardCause'
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
