import { createHistory } from 'history'
import routes from './routes'
import { useRouterHistory } from 'react-router'
import useNamedRoutes from 'use-named-routes'
//const history = useNamedRoutes(useRouterHistory(createHistory))({ basename: '/', routes })
const history = useRouterHistory(createHistory)({ basename: '/', routes })
export default history


//NOT USED AT THE MOMENT