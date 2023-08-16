import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="grid justify-items-center w-[100%] min-h-screen">
      <div>
        <div className="spinner mt-[40vh] "></div>
        <p className="pr-10">Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;