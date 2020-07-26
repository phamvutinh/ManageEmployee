import React from "react";
import { Empty } from "antd";
import PropTypes from "prop-types";
import { Employee, Dropdown } from "components";

export default function EmployeeList({
  departments,
  initValue,
  dropdownHandle,
  employees,
}) {
  return employees?.length ? (
    <>
      <Dropdown
        initValue={initValue || "All"}
        onClick={dropdownHandle}
        listDropdown={departments}
      />
      {employees.map((employee, index) => (
        <Employee content={employee} key={index} />
      ))}
    </>
  ) : (
    <Empty />
  );
}

EmployeeList.propTypes = {
  departments: PropTypes.array,
  employees: PropTypes.array,
  initValue: PropTypes.string,
  dropdownHandle: PropTypes.func,
};

EmployeeList.defaultProps = {
  departments: [],
  employees: [],
  initValue: "All",
  dropdownHandle: null,
};
