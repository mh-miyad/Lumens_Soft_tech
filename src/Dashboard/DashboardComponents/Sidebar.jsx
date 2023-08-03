import React from "react";
import logo from "../../assets/lumenlogo/lumenlogo/lumensofttech-01.svg";
import { useState } from "react";
import { AiOutlineDashboard } from "react-icons/ai";
const Sidebar = () => {
  const [drop, setdrop] = useState(false);
  return (
    <div>
      <div className='bg-[#032046] text-white h-screen w-72 py-4'>
        <div className='px-5'>
          <img src={logo} alt='' className='w-10/12' />
        </div>
        <ul className='text-xl mx-3 '>
          <li>Menu</li>
          <li
            className={`py-2 px-4 cursor-pointer ${
              drop ? "bg-[#062F65]  rounded-xl" : ""
            }`}
            onClick={() => setdrop(!drop)}>
            <div className='flex items-center gap-4'>
              {" "}
              <AiOutlineDashboard /> <span>Dropdown</span>
            </div>
          </li>
          <ul
            className={`${
              drop ? "block" : "hidden"
            } text-white rounded-lg  bg-[#062F65] py-4  mx-2 text-center `}>
            <li className='py-1 px-2 '>Create project</li>
            <li className='py-1 px-2 '>project list</li>
            <li className='py-1 px-2 '>client list</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
