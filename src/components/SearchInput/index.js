import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./style.scss";

export default function SearchInput({ ...rest }) {
  const [value, setValue] = React.useState("");
  const changeHandle = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search__wrapper">
      <input
        type="text"
        value={value}
        onChange={changeHandle}
        className="search__input"
        {...rest}
      />
      <button className="search__button">
        <SearchOutlined />
      </button>
    </div>
  );
}
