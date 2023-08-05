import React from "react";
import { Outlet } from "react-router-dom";

import SidebarComp from "../Dashboard/DashboardComponents/Sidebar";
import NavbarComp from "../Dashboard/DashboardComponents/NavbarComp";

const Layout = () => {
  return (
    <div className='flex '>
      <div className='absolute z-50   bg-[#032046]  min-h-full '>
        <SidebarComp />
      </div>
      <div className=' relative '>
        <NavbarComp />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
