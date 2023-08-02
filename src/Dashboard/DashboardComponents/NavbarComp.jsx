import React from "react";
import { Button, Navbar } from "flowbite-react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { HiBars3CenterLeft } from "react-icons/hi2";
// import logo from "../../assets/logo.png";
const NavbarComp = () => {
  return (
    <div>
      <div className=''>
        <Navbar fluid rounded className=' bg-white  dark:bg-slate-950 '>
          <Navbar.Brand>
            <HiBars3CenterLeft
              onClick={() => setIsopen(!isOpen)}
              className='mr-10 h-8 w-8 text-black dark:text-white '
              cursor={"pointer"}
            />
            <img
              alt='codexyFy Logo'
              className='mr-3 h-7 rounded-full sm:h-14'
              //   src={logo}
            />
          </Navbar.Brand>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarComp;
