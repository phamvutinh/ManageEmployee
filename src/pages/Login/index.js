import React from "react";
import GoogleLogin from "react-google-login";
import "./style.scss";
import constants from "utils/constants";

export default function Login({ history }) {
  const onSuccess = (res) => {
    const googleResponse = {
      token: res.tokenId,
      Image: res.profileObj.imageUrl,
    };
    sessionStorage.setItem("userData", JSON.stringify(googleResponse));
    history.push("/");
  };

  const onFailure = (res) => {
    alert("Error when login, Please try again");
    console.log(res);
  };

  return (
    <div className="Login">
      <div className="Login__container">
        <h2>
          Welcome to{" "}
          <span style={{ display: "block" }}>Manage Employee App</span>
        </h2>
        <GoogleLogin
          className="Login__button"
          style={{ fontWeight: "bold" }}
          clientId={constants.CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </div>
    </div>
  );
}
