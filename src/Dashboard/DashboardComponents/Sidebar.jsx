import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
const SidebarComp = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Sidebar className='h-screen' collapsed={isOpen}>
        <Menu>
          <SubMenu label='Charts'>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      ;
    </div>
  );
};

export default SidebarComp;
