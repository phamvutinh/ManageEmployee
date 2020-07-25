import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export default function Button({ title, ...rest }) {
  return (
    <button className="button" {...rest}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
};
