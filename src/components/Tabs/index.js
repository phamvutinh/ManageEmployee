import React from "react";
import { Tabs } from "antd";
import "./style.scss";
import EmployeeList from "pages/Manage/EmployeeList";
import DepartmentList from "pages/Manage/DepartmentList";
import PropTypes from "prop-types";

const { TabPane } = Tabs;

const TAB_TITLE = ["Department", "Employees"];

export default function Tab({
  activeTab,
  departments,
  employees,
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

Tab.propTypes = {
  activeTab: PropTypes.string,
  departments: PropTypes.array,
  employees: PropTypes.array,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  departmentSearch: PropTypes.string,
  clearFilter: PropTypes.func,
  dropdownHandle: PropTypes.func,
};

Tab.defaultProps = {
  activeTab: "0",
  departments: [],
  employees: [],
  onClick: null,
  onChange: null,
  departmentSearch: null,
  clearFilter: null,
  dropdownHandle: null,
};
