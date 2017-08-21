import Layout from '../../code/modules/layout/Layout'
import DashboardDonator from '../../code/modules/Donator/Dashboard/DashboardDonator'
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
