import { Route } from 'react-router-dom';

import JobOfferList from '../job-offers/JobOfferList';
import JobOfferCreate from '../job-offers/job-offer-create/JobOfferCreate';
import JobOfferDetail from '../job-offers/job-offer-detail/JobOfferDetail';
import JobOfferSearch from '../job-offers/job-offer-search/JobOfferSearch';

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

      <Route path={`${ROOT}/settings`}>
        <p>User settings</p>
      </Route>

      {/* JOB OFFERS */}
      <Route path={`${ROOT}/job-offers`}>
        <JobOfferList/>
      </Route>

      <Route path={`${ROOT}/job-offer-search`}>
        <JobOfferSearch/>
      </Route>

      <Route path={`${ROOT}/job-offer-create`}>
        <JobOfferCreate/>
      </Route>
      
      <Route path={`${ROOT}/job-offer`}>
        <JobOfferDetail/>
      </Route>
    </>
  )
}

export default DashboardApp;
