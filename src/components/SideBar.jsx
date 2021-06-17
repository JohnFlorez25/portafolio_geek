import React from "react";
import styled from "styled-components";

export const SideBar = ({ children }) => {
  return (
    <div className="SideBar">
      <div className="SideBar-container">{children}</div>
    </div>
  );
};
