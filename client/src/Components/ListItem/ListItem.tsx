import React from "react";
import CheckedIcon from "../CheckedIcon/CheckedIcon";
import { ListItemProps } from "../../Interfaces";

import "./ListItem.css";

function ListItem({ listData, listNumber, open, setOpen }: ListItemProps) {
  const paragraphHeight = `${listData.items.length * 51}px`;
  const underlineWidth = {
    "--paragraphHeight": open ? paragraphHeight : "1.25rem",
  } as React.CSSProperties;

  const onChange = () => {
    setOpen((prev: number) => {
      if (prev === listNumber - 1) {
        return -1;
      } else {
        return listNumber - 1;
      }
    });
  };
  return (
    <div className="list">
      <div className="section-container" onClick={onChange}>
        <div className="section-number">{listNumber}</div>
        <p className="section-title">{listData.title}</p>
      </div>
      <div className="list-details">
        {open &&
          listData.items.map((detailsItem, index) => (
            <div className="details-container" key={index}>
              <CheckedIcon />
              <p className="details-item">
                {detailsItem.text}{" "}
                <a
                  href="mailto:careers@cornercasetech.com"
                  className="details-emails"
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
