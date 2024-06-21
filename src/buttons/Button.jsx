import "./Button.modules.css";
import React, { memo } from "react";

function Button({ icon, link, color, nameApp }) {
  return (
    <a href={link}>
      <button className="button ">
        <span
          className="button-decor "
          style={{ backgroundColor: color }}
        ></span>
        <div className="button-content">
          <div className="button__icon ">{icon}</div>
          <span className="button__text">{nameApp}</span>
        </div>
      </button>
    </a>
  );
}

export default memo(Button);
