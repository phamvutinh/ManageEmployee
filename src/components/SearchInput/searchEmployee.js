import { filterEmployee } from "actions/employeeActions";

export default function (value, valueDepartment) {
  return (dispatch) => {
    dispatch(filterEmployee(value, valueDepartment));
  };
}
