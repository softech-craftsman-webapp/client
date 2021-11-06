import { Route } from 'react-router-dom';

import Main from './pages/main';
import Applications from './pages/applications';
import Transactions from './pages/transactions';
import Ratings from './pages/ratings';
import UserDetails from './pages/user-details';
import Settings from './pages/settings';

import SettingsEmailComponent from './pages/settings/email';
import SettingsNameComponent from './pages/settings/name';
import SettingsPasswordComponent from './pages/settings/password';

import JobOfferList from './pages/job-offers/JobOfferList';
import JobOfferCreate from './pages/job-offers/job-offer-create/JobOfferCreate';
import JobOfferDetail from './pages/job-offers/job-offer-detail/JobOfferDetail';
import JobOfferSearch from './pages/job-offers/job-offer-search/JobOfferSearch';


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
   * @ref src\components\Sidebar.jsx
   */
  return(
    <>
    <Route exact path={`${ROOT}`}>
        <Main/>
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

      {/* JOB OFFERS */}
      <Route exact path={`${ROOT}/job-offers`}>
        <JobOfferList/>
      </Route>

      <Route exact path={`${ROOT}/job-offer-search`}>
        <JobOfferSearch/>
      </Route>

      <Route exact path={`${ROOT}/job-offer/new`}>
        <JobOfferCreate/>
      </Route>
      
      <Route exact path={`${ROOT}/job-offer`}>
        <JobOfferDetail/>
      </Route>

      {/* SETTINGS */}
      <Route exact path={`${ROOT}/settings`}>
        <Settings/>
      </Route>

      <Route exact path={`${ROOT}/settings/update-name`}>
        <SettingsNameComponent/>
      </Route>

      <Route exact path={`${ROOT}/settings/update-email`}>
        <SettingsEmailComponent/>
      </Route>

      <Route exact path={`${ROOT}/settings/update-password`}>
        <SettingsPasswordComponent/>
      </Route>
    </>
  )
}

export default DashboardApp;
