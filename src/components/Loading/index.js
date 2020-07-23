import React from "react";
import { Spin } from "antd";
import "./style.scss";

export default function Loading() {
  return (
    <div className="loading">
      <Spin size="large" tip="Loading..." />
    </div>
  );
}
