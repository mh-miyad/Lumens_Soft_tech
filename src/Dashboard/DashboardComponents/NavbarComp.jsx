import { Button, Navbar } from "flowbite-react";
import React from "react";

const NavbarComp = () => {
  return (
    <div>
      <div className='bg-gray-800 text-white h-16 px-4 flex items-center'>
        <h1 className='text-2xl font-bold'>Dashboard App</h1>
        {/* Add any additional app bar content here */}
      </div>
    </div>
  );
};

export default NavbarComp;
