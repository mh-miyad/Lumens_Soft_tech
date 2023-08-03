import React from "react";
import logo from "../../assets/lumenlogo/lumenlogo/lumensofttech-01.svg";
import { useState } from "react";
import { AiOutlineDashboard, AiFillAppstore } from "react-icons/ai";
import DropDownMenu from "./DropDown/DropDownMenu";

const Sidebar = () => {
  const [drop, setdrop] = useState(false);
  return (
    <div>
      <div className='bg-[#032046] text-white h-screen w-72 py-4'>
        <div className='px-5'>
          <img src={logo} alt='' className='w-10/12' />
        </div>
        <ul className='text-xl mx-3 space-y-3 '>
          <li className='text-cyan-400 font-bold'>Menu</li>
          <DropDownMenu
            icon={<AiOutlineDashboard />}
            lebel={"Dashboard"}
            menu={["Create Pages ", "Project List", "Client List "]}
          />
          <DropDownMenu
            icon={<AiFillAppstore />}
            lebel={"App"}
            menu={["Not Set yet"]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
