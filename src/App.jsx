import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Main from './pages/main';
import Dashboard from './pages/dashboard';
import ForgotPassword from './pages/auth/forgot-password';
import AuthChangePassword from './pages/auth/change-password';
import Verify from './pages/auth/verify';
import ProtectedRoute from './helpers/ProtectedRoute';
import TransactionCreate from './pages/transaction/transaction-create';
import TransactionDetail from './pages/transaction/transaction-details';
import TransactionList from './pages/transaction/transaction-list';
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
        {/*<Route exact path="/dashboard" >
          <Dashboard/>
  </Route>*/}
      <ProtectedRoute path="/dashboard" component={Dashboard}/>

        <Route exact path="/transaction/transaction-create">
          <TransactionCreate/>
        </Route>  

        <Route exact path="/transaction/transaction-details">
          <TransactionDetail/>
        </Route>  
        <Route exact path="/transaction/transaction-list">
          <TransactionList/>
        </Route>  

        <Route path="*">
          <p>Error 404 - Not found</p>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;