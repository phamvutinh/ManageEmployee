import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";
import { Department } from "components";

export default function DepartmentList({ onClick, departments }) {
  return departments?.length ? (
    departments.map((department, index) => (
      <Department content={department} onClick={onClick} key={index} />
    ))
  ) : (
    <Empty />
  );
}

DepartmentList.propTypes = {
  onClick: PropTypes.func,
  departments: PropTypes.array,
};

DepartmentList.defaultProps = {
  onClick: () => {},
  departments: [],
};
