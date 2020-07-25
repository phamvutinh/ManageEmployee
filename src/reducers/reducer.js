import {
  FETCH_EMPLOYEE_PENDING,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_EMPLOYEE_ERROR,
  FILTER_EMPLOYEE,
  FILTER_DEPARTMENT,
  CHANGE_ACTIVE_TAB,
  CLEAR_FILTER,
  SET_DEPARTMENT_SEARCH,
} from "actions/employeeActions";
import { getTotal, filterDepartment, filterEmployee } from "utils";

const initialState = {
  pending: false,
  employees: [],
  departments: [],
  departmentSearch: null,
  filtered: [],
  activeTab: "0",
  error: null,
};

//TODO Rename employee to filtered

export function employeesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EMPLOYEE_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_EMPLOYEE_SUCCESS:
      return {
        ...state,
        pending: false,
        employees: action.payload,
        filtered: action.payload,
        departments: getTotal(action.payload),
      };
    case FETCH_EMPLOYEE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FILTER_EMPLOYEE:
      const employees = filterEmployee(
        state.filtered,
        action.payload.searchValue,
        action.payload.valueDepartment
      );
      return {
        ...state,
        employees,
        activeTab: "1",
      };
    case FILTER_DEPARTMENT:
      if (action.payload) {
        const newEmployees = filterDepartment(state.filtered, action.payload);
        return {
          ...state,
          employees: newEmployees,
        };
      } else {
        return {
          ...state,
          employees: state.filtered,
        };
      }
    case CLEAR_FILTER:
      return {
        ...state,
        employees: [...state.filtered],
      };
    case SET_DEPARTMENT_SEARCH:
      return {
        ...state,
        departmentSearch: action.payload,
      };
    case CHANGE_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.activeTab,
      };
    default:
      return state;
  }
}

export const getEmployees = (state) => state.employees;
export const getDepartment = (state) => state.departments;
export const getDepartmentSearch = (state) => state.departmentSearch;
export const getActiveTab = (state) => state.activeTab;
export const getEmployeesPending = (state) => state.pending;
export const getEmployeesError = (state) => state.error;
