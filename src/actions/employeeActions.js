export const FETCH_EMPLOYEE_PENDING = "FETCH_EMPLOYEE_PENDING";
export const FETCH_EMPLOYEE_SUCCESS = "FETCH_EMPLOYEE_SUCCESS";
export const FETCH_EMPLOYEE_ERROR = "FETCH_EMPLOYEE_ERROR";
export const FILTER_EMPLOYEE = "FILTER_EMPLOYEE";
export const FILTER_DEPARTMENT = "FILTER_DEPARTMENT";
export const SET_DEPARTMENT_SEARCH = "SET_DEPARTMENT_SEARCH";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const CHANGE_ACTIVE_TAB = "CHANGE_ACTIVE_TAB";

export function fetchEmployeesPending() {
  return {
    type: FETCH_EMPLOYEE_PENDING,
  };
}

export function fetchEmployeesSuccess(employees) {
  return {
    type: FETCH_EMPLOYEE_SUCCESS,
    payload: employees,
  };
}

export function fetchEmployeesError(error) {
  return {
    type: FETCH_EMPLOYEE_ERROR,
    error: error,
  };
}

export function filterEmployee(searchValue, valueDepartment) {
  return {
    type: FILTER_EMPLOYEE,
    payload: { searchValue, valueDepartment },
  };
}

export function filterDepartment(department) {
  return {
    type: FILTER_DEPARTMENT,
    payload: department,
  };
}

export function setDepartmentSearch(value) {
  return {
    type: SET_DEPARTMENT_SEARCH,
    payload: value,
  };
}

export function clearFilter() {
  return {
    type: CLEAR_FILTER,
  };
}

export function changActiveTab(tab) {
  return {
    type: CHANGE_ACTIVE_TAB,
    activeTab: tab,
  };
}
