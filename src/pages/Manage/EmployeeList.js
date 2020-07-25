import React from "react";
import { Empty } from "antd";
import { Employee, Dropdown } from "components";

export default function EmployeeList({
  departments,
  initValue,
  clearFilter,
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
