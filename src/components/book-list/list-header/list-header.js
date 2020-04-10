import React from "react";

import "./list-header.css";

let ListHeader = () => {
  return(
      <div className="list-header">
        <span>#</span>
        <span>Item</span>
        <span>Count</span>
        <span>Price</span>
        <span>Action</span>
      </div>
    );
};

export default ListHeader;