import React from "react";
import { Outlet } from "react-router-dom";

import SidebarComp from "../Dashboard/DashboardComponents/Sidebar";

const Layout = () => {
  return (
    <div>
      <SidebarComp>
        <Outlet />
      </SidebarComp>
    </div>
  );
};

export default Layout;
