import React from "react";
import { Tabs } from "antd";
import { Department, Employee, Loading } from "components";
import "./style.scss";

const { TabPane } = Tabs;

export default function Tab({ listTab }) {
  return (
    <div className="tab">
      <Tabs defaultActiveKey="0">
        {listTab.length &&
          listTab.map((tab, index) => (
            <TabPane tab={tab.title} key={index}>
              <div className="tab__content">
                <Loading />
                {/* <Employee />
                <Employee />
                <Employee /> */}
              </div>
            </TabPane>
          ))}
      </Tabs>
    </div>
  );
}
