import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/DashboardComponents/Sidebar";

const Layout = () => {
  return (
    <div>
      <Sidebar>
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Layout;
