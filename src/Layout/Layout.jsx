import React from "react";
import { Outlet } from "react-router-dom";

import SidebarComp from "../Dashboard/DashboardComponents/Sidebar";
import NavbarComp from "../Dashboard/DashboardComponents/NavbarComp";

const Layout = () => {
  return (
    <div className='flex '>
      <SidebarComp />
      <div>
        <NavbarComp />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
