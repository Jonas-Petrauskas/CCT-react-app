import React from "react";
import CheckedIcon from "../CheckedIcon/CheckedIcon";
import { ListItemProps } from "../../Interfaces";

import "./ListItem.css";

function ListItem({ listData, listNumber, open, setOpen }: ListItemProps) {
  const paragraphHeight = `${listData.items.length * 51}px`;
  const underlineWidth = {
    "--underlineWidth": open ? "18rem" : "12rem",
  } as React.CSSProperties;
  const openedlist = {
    "--paragraphHeight": open ? paragraphHeight : "1.25rem",
  } as React.CSSProperties;

  const onChange = () => {
    setOpen((prev: number) => (prev === listNumber - 1 ? -1 : listNumber - 1));
  };
  return (
    <div className="list">
      <div
        className="section-container"
        onClick={onChange}
        style={underlineWidth}
      >
        <div className="section-number">{listNumber}</div>
        <p className="section-title">{listData.title}</p>
      </div>
      <div className="list-details" style={openedlist}>
        {open &&
          listData.items.map((detailsItem, index) => (
            <div className="details-container" key={index}>
              <CheckedIcon />
              <p className="details-item">
                {detailsItem.text}{" "}
                <a
                  href="mailto:careers@cornercasetech.com"
                  className="details-email"
                >
                  {detailsItem.email}
                </a>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListItem;
