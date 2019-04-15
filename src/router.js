import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/login"

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        {/* <Route path="/about/" component={About} /> */}
        {/* <Route path="/users/" component={Users} /> */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
