import React from "react";
import classes from "./OpenMenu.module.css";

const OpenMenu = (props) => {
  return (
    <center>
      <button onClick={props.openMenu} className={classes["aesthetic-button"]}>
        {props.btnTitle}
      </button>
  </center>
  );
};

export default OpenMenu;
