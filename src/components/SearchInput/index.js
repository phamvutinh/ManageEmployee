import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { bindActionCreators } from "redux";
import { getDepartmentSearch } from "reducers/reducer";
import { connect } from "react-redux";
import { useDebounce } from "hooks";
import searchEmployee from "./searchEmployee";
import "./style.scss";

function SearchInput({ filterEmployees, valueDepartment, ...rest }) {
  const [value, setValue] = React.useState("");
  const debouncedSearchTerm = useDebounce(value, 1000);

  const changeHandle = (e) => {
    setValue(e.target.value);
  };

  const pressHandle = (e) => {
    if (e.keyCode === 13) {
      clickHandle();
    }
  };

  const clickHandle = () => {
    if (value) {
      filterEmployees(value);
    }
  };

  const clearHandle = () => {
    setValue("");
    filterEmployees("", valueDepartment);
  };

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      filterEmployees(value, valueDepartment);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <div className="search__wrapper">
      <input
        type="text"
        value={value}
        onKeyDown={pressHandle}
        onChange={changeHandle}
        className="search__input"
        {...rest}
      />
      {value && (
        <button onClick={clearHandle} className="search__button">
          <CloseOutlined />
        </button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  valueDepartment: getDepartmentSearch(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      filterEmployees: searchEmployee,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
