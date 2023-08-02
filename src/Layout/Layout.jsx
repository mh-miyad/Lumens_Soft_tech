import React from "react";
import { Outlet } from "react-router-dom";

import SidebarComp from "../Dashboard/DashboardComponents/Sidebar";

const Layout = () => {
  return (
    <div className='flex gap-10'>
      <SidebarComp />
      <Outlet />
    </div>
  );
};

export default Layout;
