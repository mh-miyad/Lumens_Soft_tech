import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { Link, NavLink } from "react-router-dom";
// import {
//   HiChartPie,
//   HiUser,
//   HiInbox,
//   HiShoppingBag,
//   HiArrowSmRight,
//   HiTable,
//   HiViewBoards,
// } from "react-icons/hi";
import logo from "../../assets/lumenlogo/lumenlogo/lumensofttech-01.svg";

import MenuItemCom from "./MenuItem";
import { AirOutlined } from "@mui/icons-material";
// import { Sidebar } from "flowbite-react";

const SidebarComp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const defaultStyle = {
    backgroundColor: "gray",
    color: "white",
    /* Add other default styles here */
  };

  const hoverStyle = {
    backgroundColor: "blue",
    color: "black",
    /* Add other hover styles here */
  };
  return (
    <div>
      <Sidebar
        backgroundColor='indigo'
        style={{
          color: "white",
        }}>
        <Menu>
          <SubMenu
            label={"Dashboard"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={isHovered ? hoverStyle : defaultStyle}>
            <MenuItemCom>Hello </MenuItemCom>
            <MenuItemCom>Hello </MenuItemCom>
          </SubMenu>
          <MenuItemCom>Hello </MenuItemCom>
          <MenuItemCom>Hello </MenuItemCom>
          <MenuItemCom>Hello </MenuItemCom>
          <MenuItemCom>Hello </MenuItemCom>
          <MenuItemCom>Hello </MenuItemCom>
          <MenuItemCom>Hello </MenuItemCom>
          <MenuItemCom>Hello </MenuItemCom>
          <MenuItemCom>Hello </MenuItemCom>
          <MenuItemCom>Hello </MenuItemCom>
          <MenuItemCom>Hello </MenuItemCom>
          <MenuItemCom>Hello </MenuItemCom>
          <MenuItemCom>Hello </MenuItemCom>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComp;
