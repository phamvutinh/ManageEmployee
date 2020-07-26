import React from "react";
import { PrivateRoute } from "components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "config/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {Routes.map((route) =>
            route.private ? <PrivateRoute {...route} /> : <Route {...route} />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
