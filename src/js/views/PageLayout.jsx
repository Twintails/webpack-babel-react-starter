import React from "react";
import PropTypes from "prop-types";

import "./PageLayout.scss"

const PageLayout = ({ children }) => (
  <div className="container">
      <div className="row mt-4 mb-3">
          <div className="col-md-4 offset-md-1">
              <p>Create a new item</p>
              <div id="create-item-form">
                  {children}
              </div>
          </div>
      </div>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node
};

export default PageLayout;
