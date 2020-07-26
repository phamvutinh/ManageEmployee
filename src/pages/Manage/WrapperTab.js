import React from "react";
import {
  getEmployees,
  getEmployeesPending,
  getDepartment,
  getActiveTab,
  getDepartmentSearch,
} from "reducers/reducer";
import Tab from "components/Tabs";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Loading } from "components";
import {
  fetchEmployees,
  changeActiveTab,
  clearFilterHandle,
  departmentSearchHandle,
} from "./fetchEmployee";

function WrapperTab({
  employees,
  departments,
  pending,
  activeTab,
  fetchEmployees,
  changeActiveTab,
  setDepartmentSearch,
  departmentSearch,
  clearFilter,
}) {
  React.useEffect(() => {
    fetchEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeHandle = (key) => {
    if (key !== activeTab) {
      changeActiveTab(key);
    }
  };

  const dropdownHandle = (value) => {
    setDepartmentSearch(value);
  };

  return pending ? (
    <Loading />
  ) : (
    <Tab
      activeTab={activeTab}
      onClick={changeActiveTab}
      clearFilter={clearFilter}
      onChange={changeHandle}
      employees={employees}
      departmentSearch={departmentSearch}
      departments={departments}
      dropdownHandle={dropdownHandle}
    />
  );
}

const mapStateToProps = (state) => ({
  employees: getEmployees(state),
  pending: getEmployeesPending(state),
  departments: getDepartment(state),
  activeTab: getActiveTab(state),
  departmentSearch: getDepartmentSearch(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchEmployees,
      changeActiveTab,
      clearFilter: clearFilterHandle,
      setDepartmentSearch: departmentSearchHandle,
    },
    dispatch
  );

WrapperTab.propTypes = {
  employees: PropTypes.array,
  departments: PropTypes.array,
  pending: PropTypes.bool,
  activeTab: PropTypes.string,
  fetchEmployees: PropTypes.func,
  changeActiveTab: PropTypes.func,
  filterDepartments: PropTypes.func,
  setDepartmentSearch: PropTypes.func,
  departmentSearch: PropTypes.string,
  clearFilter: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(WrapperTab);
