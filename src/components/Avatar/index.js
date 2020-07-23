import React from "react";
import { Avatar, Dropdown, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import { useGoogleLogout } from "react-google-login";

import "./style.scss";
import constants from "utils/constants";

export default function AvatarComponent({ ...rest }) {
  const history = useHistory();
  const { signOut } = useGoogleLogout({
    jsSrc: "https://apis.google.com/js/api.js",
    clientId: constants.CLIENT_ID,
  });
  const images = JSON.parse(sessionStorage.getItem("userData"));

  const signOutHandle = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    history.push("/login");
    signOut();
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={signOutHandle} rel="noopener noreferrer">
          <LogoutOutlined style={{ marginRight: "0.5rem" }} />
          Logout
        </span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="avatar">
      <Dropdown overlay={menu} placement="bottomLeft">
        <Avatar src={images.Image} {...rest} />
      </Dropdown>
    </div>
  );
}
