import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Main from './pages/main';
import Dashboard from './pages/dashboard';
import ForgotPassword from './pages/auth/forgot-password';
import AuthChangePassword from './pages/auth/change-password';
import Verify from './pages/auth/verify';
import ProtectedRoute from './helpers/ProtectedRoute';

/**
 * Main app component
 * @returns {React.Component}
 */
function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/auth/sign-in">
          <Login/>
        </Route>

        <Route exact path="/auth/sign-up">
          <Register/>
        </Route>

        <Route exact path="/auth/forgot-password">
          <ForgotPassword/>
        </Route>  

        <Route exact path="/auth/verify/:token">
          <Verify/>
        </Route>

        <Route exact path="/auth/change-password/:token">
          <AuthChangePassword/>
        </Route>  

        {/* Protected route means that only logged in users can access it */}
        <ProtectedRoute path="/dashboard" component={Dashboard}/>

        <Route path="*">
          <p>Error 404 - Not found</p>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;