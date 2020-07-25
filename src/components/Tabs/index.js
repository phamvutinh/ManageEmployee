import React from "react";
import { Tabs } from "antd";
import "./style.scss";
import EmployeeList from "pages/Manage/EmployeeList";
import DepartmentList from "pages/Manage/DepartmentList";

const { TabPane } = Tabs;

const TAB_TITLE = ["Department", "Employees"];

export default function Tab({
  activeTab,
  departments,
  employees,
  listTab,
  onClick,
  onChange,
  departmentSearch,
  clearFilter,
  dropdownHandle,
}) {
  const changeHandle = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="tab">
      <Tabs activeKey={activeTab} onChange={changeHandle}>
        <TabPane key="0" tab={`${TAB_TITLE[0]} (${departments.length})`}>
          <div className="tab__content">
            <DepartmentList departments={departments} onClick={onClick} />
          </div>
        </TabPane>
        <TabPane key="1" tab={`${TAB_TITLE[1]} (${employees.length})`}>
          <div className="tab__content">
            <EmployeeList
              initValue={departmentSearch}
              clearFilter={clearFilter}
              departments={departments}
              employees={employees}
              dropdownHandle={dropdownHandle}
            />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
