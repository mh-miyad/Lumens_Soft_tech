import React, { useState } from "react";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { AuthContext } from "../../Auth/AuthProvider";
import {
  FcBarChart,
  FcBearish,
  FcDatabase,
  FcHome,
  FcPieChart,
} from "react-icons/fc";
import { Avatar, DarkThemeToggle } from "flowbite-react";
import { NavLink } from "react-router-dom";
const SidebarComp = () => {
  const { user, openMenu } = useContext(AuthContext);

  const [bgColor, setColor] = useState(false);

  return (
    <div>
      <Sidebar
        // hidden={openMenu}

        transitionDuration={500}
        collapsed={openMenu}
        backgroundColor={` ${bgColor ? "#020617" : "transparent"}`}
        className=' h-[100dvh]  shadow-lg dark:shadow-indigo-500/40  md:h-[200vh]'>
        <div className='my-5 '>
          {openMenu ? (
            <div>
              {" "}
              <Avatar
                img={"https://i.ibb.co/drYDNJv/ins-4.png"}
                size={"md"}
                rounded
              />
            </div>
          ) : (
            <div>
              {" "}
              <Avatar
                img={"https://i.ibb.co/drYDNJv/ins-4.png"}
                size={"xl"}
                rounded
              />
              <div>
                <div className=' text-center text-2xl font-bold dark:text-black'>
                  Name:Miyad
                </div>
                <div className=' text-center text-xl font-bold dark:text-black'>
                  Role:Admin
                </div>
              </div>
            </div>
          )}
        </div>

        <Menu>
          {openMenu ? (
            <div>
              <NavLink to={"/"}>
                <MenuItem>
                  <FcHome className='h-8 w-7' />
                </MenuItem>
              </NavLink>
              <NavLink to={"/pie"}>
                <MenuItem>
                  <FcPieChart className='h-8 w-7' />
                </MenuItem>
              </NavLink>
              <NavLink to={"/bar"}>
                <MenuItem>
                  <FcBarChart className='h-8 w-7' />
                </MenuItem>
              </NavLink>

              <NavLink to={"/database"}>
                <MenuItem>
                  <FcDatabase className='h-8 w-7' />
                </MenuItem>
              </NavLink>
              <MenuItem onClick={() => setColor(!bgColor)}>
                <DarkThemeToggle />
              </MenuItem>
            </div>
          ) : (
            <div>
              <NavLink to={"/"}>
                <MenuItem>
                  <div className='flex items-center gap-3'>
                    <FcHome className='h-8 w-7' />
                    <div className='rounded-md border  bg-indigo-500 px-5 py-2 text-base font-bold text-gray-100 shadow-xl md:text-xl'>
                      {" "}
                      Dashboard
                    </div>
                  </div>
                </MenuItem>
              </NavLink>
              <NavLink to={"/pie"}>
                <MenuItem>
                  <div className='flex items-center gap-3'>
                    <FcPieChart className='h-8 w-7' />
                    <div className='rounded-md   px-5 py-2 text-base font-bold text-gray-600 shadow-xl md:text-xl'>
                      {" "}
                      Pie chart
                    </div>
                  </div>
                </MenuItem>
              </NavLink>
              <NavLink to={"/bar"}>
                <MenuItem>
                  <div className='flex items-center gap-3'>
                    <FcBarChart className='h-8 w-7' />
                    <div className='rounded-md   px-5 py-2 text-base font-bold text-gray-600 shadow-xl md:text-xl'>
                      {" "}
                      Bar Chart
                    </div>
                  </div>
                </MenuItem>
              </NavLink>

              <NavLink to={"/database"}>
                <MenuItem>
                  <div className='flex items-center gap-3'>
                    <FcDatabase className='h-8 w-7' />
                    <div className='rounded-md  px-5 py-2 text-base font-bold text-gray-600 shadow-xl md:text-xl'>
                      {" "}
                      Table Of Data
                    </div>
                  </div>
                </MenuItem>
              </NavLink>

              <MenuItem onClick={() => setColor(!bgColor)}>
                <div className='flex items-center gap-3'>
                  <DarkThemeToggle />
                </div>
              </MenuItem>
            </div>
          )}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarComp;
