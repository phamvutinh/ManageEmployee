import React from "react";
import PropTypes from "prop-types";
import decode from "jwt-decode";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const expToken =
    sessionStorage.getItem("userData") &&
    decode(sessionStorage.getItem("userData"));
  const validAuth = expToken && Date.now() <= expToken.exp * 1000;
  return (
    <Route
      {...rest}
      render={(props) =>
        validAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType,
};

export default PrivateRoute;
