import {
  fetchEmployeesError,
  fetchEmployeesSuccess,
  fetchEmployeesPending,
  filterDepartment,
  clearFilter,
  changActiveTab,
  setDepartmentSearch,
} from "actions/employeeActions";
import listEmployee from "api/sheetsAPi";

export function fetchEmployees() {
  return (dispatch) => {
    const params = {
      ranges: "Danh sách!C9:M13",
      majorDimension: "ROWS",
      key: "AIzaSyCN5iLB83-xF36bNpgFnZxwyJDfOqJ0rQQ",
    };
    dispatch(fetchEmployeesPending());
    listEmployee
      .listEmployee(params)
      .then((result) => {
        dispatch(fetchEmployeesSuccess(result.data.valueRanges[0].values));
      })
      .catch((err) => {
        dispatch(fetchEmployeesError(err));
      });
  };
}

export function changeActiveTab(key, value) {
  return (dispatch) => {
    dispatch(changActiveTab(key));
    if (value) {
      dispatch(filterDepartment(value));
      dispatch(setDepartmentSearch(value));
    }
  };
}

export function departmentSearchHandle(value) {
  return (dispatch) => {
    dispatch(setDepartmentSearch(value));
    dispatch(filterDepartment(value));
  };
}

export function clearFilterHandle() {
  return (dispatch) => {
    dispatch(clearFilter());
  };
}
