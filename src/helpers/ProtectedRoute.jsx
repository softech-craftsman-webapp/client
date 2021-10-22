import { Redirect, Route } from 'react-router';

function ProtectedRoute({...routeProps}) {
  // JWT token is stored in localStorage
  const hasAccessToken = localStorage.getItem("token");
  const hasRefreshToken = localStorage.getItem("refresh_token");

  if (hasAccessToken && hasRefreshToken) {
    return <Route {...routeProps} />;
  }
  
  else {
    return <Redirect to={{ pathname: '/auth/sign-in' }} />;
  }
}

export default ProtectedRoute;