import { Redirect, Route } from 'react-router';

function ProtectedRoute({...routeProps}) {
  // JWT token is stored in localStorage
  const hasAccessToken = localStorage.getItem("token");
  const hasRefreshToken = localStorage.getItem("refresh_token");
  const hasGeoData = localStorage.getItem("geo_data");
  const hasUserData = localStorage.getItem("user_data");

  if (hasAccessToken && hasRefreshToken && hasGeoData && hasUserData) {
    return <Route {...routeProps} />;
  }
  
  else {
    return <Redirect to={{ pathname: '/auth/sign-in', search: `?redirect=${window.location.pathname}` }} />;
  }
}

export default ProtectedRoute;