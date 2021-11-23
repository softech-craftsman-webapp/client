import { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { withQuicklink } from 'quicklink/dist/react/hoc.js';

import Main from './pages/main';

import Transactions from './pages/transactions';

import Ratings from './pages/ratings';

import Settings from './pages/settings';
import SettingsEmailComponent from './pages/settings/email';
import SettingsNameComponent from './pages/settings/name';
import SettingsPasswordComponent from './pages/settings/password';

import JobOfferList from './pages/job-offers';
import JobOfferCreate from './pages/job-offers/job-offer-create';
import JobOfferDetail from './pages/job-offers/job-offer-detail';
import JobOfferEdit from './pages/job-offers/job-offer-edit';
import CreatedJobOffers from './pages/job-offers/created-job-offers';
import AppliedJobOffers from './pages/job-offers/applied-job-offers';

import Applications from './pages/applications';
import ApplicationCreate from './pages/job-offers/application-create';
import ApplicationDetail from './pages/applications/application-detail';

import UserDetails from './pages/user-details';
import UserDetailsCreate from './pages/user-details/user-details-create';
import RevealUserDetails from './pages/user-details/reveal'

const options = {
  origins: []
};

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
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact 
             path={`${ROOT}`} 
             component={withQuicklink(Main, options)}/>

      {/* Applications */}  
      <Route exact 
             path={`${ROOT}/applications`} 
             component={withQuicklink(Applications, options)}/>
      
      {/* id => application id */}
      <Route exact 
             path={`${ROOT}/applications/:id`} 
             component={withQuicklink(ApplicationDetail, options)}/>

      {/* Transactions */}
      <Route exact 
             path={`${ROOT}/transactions`} 
             component={withQuicklink(Transactions, options)}/>

      {/* Ratings */}
      <Route exact 
             path={`${ROOT}/ratings`} 
             component={withQuicklink(Ratings, options)}/>

      {/* User Details */}
      <Route exact 
             path={`${ROOT}/user-details`} 
             component={withQuicklink(UserDetails, options)}/>

      <Route exact 
             path={`${ROOT}/user-details/welcome`} 
             component={withQuicklink(UserDetailsCreate, options)}/>

      <Route exact 
             path={`${ROOT}/user-details/:id/reveal`} 
             component={withQuicklink(RevealUserDetails, options)}/>

      {/* JOB OFFERS */}
      <Route exact 
             path={`${ROOT}/job-offers`} 
             component={withQuicklink(JobOfferList, options)}/>

      <Route exact 
             path={`${ROOT}/job-offers/action/new`} 
             component={withQuicklink(JobOfferCreate, options)}/>

      <Route exact 
             path={`${ROOT}/job-offers/action/filter-created`} 
             component={withQuicklink(CreatedJobOffers, options)}/>

      {/* id => job id */}
      <Route exact 
             path={`${ROOT}/job-offers/:id/apply`} 
             component={withQuicklink(ApplicationCreate, options)}/>

      <Route exact 
             path={`${ROOT}/job-offers/action/filter-applied`} 
             component={withQuicklink(AppliedJobOffers, options)}/>
      
      {/* id => job id */}
      <Route exact 
             path={`${ROOT}/job-offers/:id`} 
             component={withQuicklink(JobOfferDetail, options)}/>

      <Route exact 
             path={`${ROOT}/job-offers/:id/edit`} 
             component={withQuicklink(JobOfferEdit, options)}/>

      {/* SETTINGS */}
      <Route exact 
             path={`${ROOT}/settings`} 
             component={withQuicklink(Settings, options)}/>

      <Route exact 
             path={`${ROOT}/settings/update-name`} 
             component={withQuicklink(SettingsNameComponent, options)}/>

      <Route exact 
             path={`${ROOT}/settings/update-email`} 
             component={withQuicklink(SettingsEmailComponent, options)}/>

      <Route exact 
             path={`${ROOT}/settings/update-password`} 
             component={withQuicklink(SettingsPasswordComponent, options)}/>
    </Suspense>
  )
}

export default DashboardApp;
