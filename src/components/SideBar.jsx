import React from "react";

export const SideBar = ({ children }) => {
  return (
    <div className="SideBar">
      <div className="SideBar-container">{children}</div>
    </div>
  );
};
