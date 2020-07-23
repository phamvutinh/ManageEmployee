import React from "react";
import Login from "pages/Login";
import ErrorPage from "pages/Error";
import { PrivateRoute } from "components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Manage from "pages/Manage";
import sheetsAPi from "api/sheetsAPi";

function App() {
  React.useEffect(() => {
    fetchHandle();
  }, []);

  const fetchHandle = async () => {
    const params = {
      ranges: "Danh sách!C9:M13",
      majorDimension: "ROWS",
      key: "AIzaSyCN5iLB83-xF36bNpgFnZxwyJDfOqJ0rQQ",
    };
    sheetsAPi
      .listEmployee(params)
      .then((result) => console.log(result.data.valueRanges[0].values));
  };
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
