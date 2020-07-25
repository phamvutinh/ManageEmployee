import React from "react";
import Login from "pages/Login";
import ErrorPage from "pages/Error";
import { PrivateRoute } from "components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Manage from "pages/Manage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/" exact component={Manage} />
          <Route path="/login" exact component={Login} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
