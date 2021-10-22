import { Route } from 'react-router-dom';

import Main from './pages/main';
import Jobs from './pages/jobs';
import Applications from './pages/applications';
import Transactions from './pages/transactions';
import Ratings from './pages/ratings';
import UserDetails from './pages/user-details';
import Settings from './pages/settings';

/**
 * Protected routes
 * @returns {JSX.Element}
 */
function DashboardApp() {
  const ROOT = '/dashboard';
  /**
   * Note this is protected route, so you need to be logged in to access it
   * You have to obtain jwt tokes from server to be able to access this route
   * 
   * This is a sample of a route configuration inside
   * the DashboardApp.
   * 
   * You have to change the path to match your route path
   * @ref src\components\Sidebar.tsx
   */
  return(
    <>
      <Route exact path={`${ROOT}`}>
        <Main/>
      </Route>

      <Route path={`${ROOT}/jobs`}>
        <Jobs/>
      </Route>

      <Route path={`${ROOT}/applications`}>
        <Applications/>
      </Route>      

      <Route path={`${ROOT}/transactions`}>
        <Transactions/>
      </Route>

      <Route path={`${ROOT}/ratings`}>
        <Ratings/>
      </Route>

      <Route path={`${ROOT}/user-details`}>
        <UserDetails/>
      </Route>

      <Route path={`${ROOT}/settings`}>
        <Settings/>
      </Route>

      <Route path={`${ROOT}/*`}>
        <p>Error 404 - Not found</p>
      </Route>
    </>
  )
}

export default DashboardApp;
