import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from './components/Home'
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"

export const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-up/">
            <SignUp />
          </Route>
          <Route path="/sign-in/">
            <SignIn />
          </Route>
        </Switch>
    </Router>
  );
}