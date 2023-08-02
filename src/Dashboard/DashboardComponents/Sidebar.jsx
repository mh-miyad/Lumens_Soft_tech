import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SidebarComp = () => {
  return (
    <div>
      <Sidebar>
        <Menu>
          <SubMenu label='Charts'>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label='Charts'>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label='Charts'>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <SubMenu label='Charts'>
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem component={<Link to='/documentation' />}>
            {" "}
            Documentation
          </MenuItem>
          <MenuItem component={<Link to='/documentation' />}>
            {" "}
            Documentation
          </MenuItem>
          <MenuItem component={<Link to='/documentation' />}>
            {" "}
            Documentation
          </MenuItem>
          <MenuItem component={<Link to='/documentation' />}>
            {" "}
            Documentation
          </MenuItem>
          <MenuItem component={<Link to='/documentation' />}>
            {" "}
            Documentation
          </MenuItem>
          <MenuItem component={<Link to='/documentation' />}>
            {" "}
            Documentation
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComp;
