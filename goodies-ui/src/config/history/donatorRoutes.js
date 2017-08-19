import Layout from '../../core/containers/layout/Layout'
import DashboardDonator from '../../core/containers/Donator/Dashboard/DashboardDonator'
// TODO
module.exports = {
  path: 'donator',
  name: 'Donator',
  component: props => <Layout entity='DONATOR'>{props.children}</Layout>,
  childRoutes: [
    {
      path: 'dashboard',
      name: 'DashboardDonator',
      component: DashboardDonator
    }
  ]
}
