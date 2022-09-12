import React from "react";
import PropTypes from "prop-types";

const H1 = ({ children, className }) => {
  return <h1 className={className}>{children}</h1>;
};

H1.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default H1;
