import React from "react";
import clasess from "./LoadingSpinner.module.css";
const LoadingSpinner = () => {
  return (
    <>
      <div class={clasess["spinner-container"]}>
        <div class={clasess["spinner"]}></div>
      </div>
    </>
  );
};

export default LoadingSpinner;
