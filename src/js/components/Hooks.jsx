import React, { useState } from "react";

export const Hooks = () => {
  const [color, setColor] = useState("red");
  const getLightClass = (lightColor) => {
    return `
      rounded-circle 
      ${lightColor === "red" ? "bg-danger" : lightColor === "yellow" ? "bg-warning" : "bg-success"} 
      ${color === lightColor ? "active-light" : "inactive-light"}
    `;
  };

  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="bg-dark" style={{ width: "20px", height: "100px" }}></div>
      <div className="bg-dark p-3 rounded-4 d-flex flex-column align-items-center gap-3">
        <div
          onClick={() => setColor("red")}
          className={getLightClass("red")}
          style={{ width: "70px", height: "70px", cursor: "pointer" }}
        ></div>

        <div
          onClick={() => setColor("yellow")}
          className={getLightClass("yellow")}
          style={{ width: "70px", height: "70px", cursor: "pointer" }}
        ></div>

        <div
          onClick={() => setColor("green")}
          className={getLightClass("green")}
          style={{ width: "70px", height: "70px", cursor: "pointer" }}
        ></div>
      </div>
    </div>
  );
};