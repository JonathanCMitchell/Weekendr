import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Preferences from './components/Preferences';
import UserProfile from './containers/UserProfile';
import Signup from './containers/Signup';
import Login from './containers/Signin';
// import TripResults from './components/TripResults';

//routes to be added:
// <Route path="/trip-results" component={TripResults} />

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/preferences" component={Preferences} />
    <Route path="/profile" component={UserProfile} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </Route>
);

export default routes;
