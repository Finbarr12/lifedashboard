import React from "react";
import Side from "../../blocks/dashblocks/Side";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Side />
      <Outlet />
    </div>
  );
};

export default DashLayout;
