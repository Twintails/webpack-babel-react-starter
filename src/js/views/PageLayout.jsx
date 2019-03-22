import React from "react";
import PropTypes from "prop-types";

import "./PageLayout.scss"

const PageLayout = ({ children }) => (
  <div className="container">
      <div className="row mt-4 mb-3">
          {children}
      </div>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node
};

export {PageLayout};
