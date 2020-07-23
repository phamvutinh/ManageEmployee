import React from "react";
import { UsergroupAddOutlined } from "@ant-design/icons";
import "./style.scss";

export default function Department() {
  return (
    <div className="department">
      <UsergroupAddOutlined />
      <p>Total: 2</p>
      <div className="department__title">Accounting</div>
    </div>
  );
}
