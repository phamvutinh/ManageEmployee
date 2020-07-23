import React from "react";
import { PhoneOutlined, MailOutlined, PhoneTwoTone } from "@ant-design/icons";
import "./style.scss";

export default function Employee() {
  return (
    <div className="employee">
      <h2 className="employee__text employee__position">AM</h2>
      <h3 className="employee__text employee__name">Nguyễn Hải Anh</h3>
      <p className="employee__text employee__phone">
        <PhoneOutlined />
        0353137110
      </p>
      <p className="employee__text employee__mail">
        <MailOutlined />
        phamvu.tinh99@gmail.com
      </p>
      <div className="employee__call">
        <a href={`tel:0353137110`}>
          <PhoneTwoTone />
        </a>
      </div>
    </div>
  );
}
