import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login"
import Home from "./components/home"

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        {/* <Route path="/users/" component={Users} /> */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
