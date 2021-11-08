import React from "react";
import CheckedIcon from "../CheckedIcon/CheckedIcon";
import "./ListItem.css";

function ListItem() {
  return (
    <div className="list">
      <div className="section-container">
        <div className="section-number"></div>
        <p className="section-title"></p>
      </div>
      <div className="list-details"></div>
    </div>
  );
}

export default ListItem;
