import React from "react";
import { UsergroupAddOutlined } from "@ant-design/icons";
import "./style.scss";

export default function Department({ onClick, content }) {
  const { key, count } = content;

  const clickHandle = () => {
    if (onClick) {
      onClick("1", key);
    }
  };
  return (
    <div className="department" onClick={clickHandle}>
      <UsergroupAddOutlined />
      <p>Total: {count}</p>
      <div className="department__title">{key}</div>
    </div>
  );
}
