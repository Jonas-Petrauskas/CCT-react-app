import React from "react";
import CheckedIcon from "../CheckedIcon/CheckedIcon";
import { ListItemProps } from "../../Interfaces";

import "./ListItem.css";

function ListItem({ listData, listNumber, open, setOpen }: ListItemProps) {
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
