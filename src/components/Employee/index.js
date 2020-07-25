import React from "react";
import { PhoneOutlined, MailOutlined, PhoneTwoTone } from "@ant-design/icons";
import "./style.scss";

function Employee({ content }) {
  const [, position, name, , sex, phone, mail] = content;
  return (
    <div className="employee">
      <h2 className="employee__text employee__position">{position}</h2>
      <h3 className="employee__text employee__name">
        {sex || "Mr"}.{name}
      </h3>
      <p className="employee__text employee__phone">
        <PhoneOutlined />
        {phone}
      </p>
      <p className="employee__text employee__mail">
        <MailOutlined />
        {mail}
      </p>
      <div className="employee__call">
        <a href={`tel:${phone}`}>
          <PhoneTwoTone />
        </a>
      </div>
    </div>
  );
}
export default React.memo(Employee);
