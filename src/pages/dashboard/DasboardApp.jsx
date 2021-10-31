import { Route } from 'react-router-dom';

import Main from './pages/main';
import Jobs from './pages/jobs';
import Applications from './pages/applications';
import Transactions from './pages/transactions';
import Ratings from './pages/ratings';
import UserDetails from './pages/user-details';
import Settings from './pages/settings';

import NewJob from './pages/jobs/new';

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

      {/* Jobs */}
      <Route exact path={`${ROOT}/jobs`}>
        <Jobs/>
      </Route>
      
      <Route exact path={`${ROOT}/jobs/new`}>
        <NewJob/>
      </Route>

      {/* Applications */}  
      <Route exact path={`${ROOT}/applications`}>
        <Applications/>
      </Route>      

      {/* Transactions */}
      <Route exact path={`${ROOT}/transactions`}>
        <Transactions/>
      </Route>

      {/* Ratings */}
      <Route exact path={`${ROOT}/ratings`}>
        <Ratings/>
      </Route>

      {/* User Details */}
      <Route exact path={`${ROOT}/user-details`}>
        <UserDetails/>
      </Route>

      {/* Settings */}
      <Route exact path={`${ROOT}/settings`}>
        <Settings/>
      </Route>
    </>
  )
}

export default DashboardApp;
