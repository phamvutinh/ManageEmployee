import React from "react";
import { PhoneOutlined, MailOutlined, PhoneTwoTone } from "@ant-design/icons";
import "./style.scss";

function Employee({ content }) {
  return (
    <div className="employee">
      <h2 className="employee__text employee__position">{content[1]}</h2>
      <h3 className="employee__text employee__name">
        {content[4] ? content[4] : "Mr"}.{content[2]}
      </h3>
      <p className="employee__text employee__phone">
        <PhoneOutlined />
        {content[5]}
      </p>
      <p className="employee__text employee__mail">
        <MailOutlined />
        {content[6]}
      </p>
      <div className="employee__call">
        <a href={`tel:${content[5]}`}>
          <PhoneTwoTone />
        </a>
      </div>
    </div>
  );
}
export default React.memo(Employee);
