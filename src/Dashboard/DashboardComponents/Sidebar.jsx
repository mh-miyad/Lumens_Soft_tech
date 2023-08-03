import React from "react";
import logo from "../../assets/lumenlogo/lumenlogo/lumensofttech-01.svg";
import { useState } from "react";
import { AiOutlineDashboard, AiFillAppstore } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { FaLayerGroup, FaUsers } from "react-icons/fa";
import { FcGenealogy } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import DropDownMenu from "./DropDown/DropDownMenu";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const Sidebar = () => {
  const { openMenu } = useContext(AuthContext);
  return (
    <div>
      {" "}
      <div
        className={`${
          openMenu
            ? " translate-x-0 transition-all  ease-in-out duration-700 delay-100 bg-[#032046] text-white h-screen w-72 py-4"
            : " -translate-x-[100vw] opacity-0 inset-0 w-0 transition-all duration-500  delay-150ease-in-out"
        }`}>
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
          <li className='text-cyan-400 font-bold'>Pages</li>
          <DropDownMenu
            icon={<RiPagesLine />}
            lebel={"All Pages "}
            menu={["About Us", "Blog", "Services", "Landing Page"]}
          />
          <DropDownMenu
            icon={<FaLayerGroup />}
            lebel={"Layout"}
            menu={["Not Set yet"]}
          />
          <li className='text-cyan-400 font-bold'>Components </li>
          <DropDownMenu
            icon={<FcGenealogy />}
            lebel={"UI Elements"}
            menu={[
              "buttons",
              "Alerts",
              "Progress Bar",
              "Number Counter ",
              "Service Control ",
              "Home carousel",
              " Testimonials",
              " Dropdown Menu ",
            ]}
          />
          <DropDownMenu
            icon={<LiaFileInvoiceDollarSolid />}
            lebel={"Invoices"}
            menu={["Invoices List "]}
          />
          <DropDownMenu
            icon={<HiOutlineMail />}
            lebel={"Email"}
            menu={["Inbox", "Templates"]}
          />
          <DropDownMenu
            icon={<FaUsers />}
            lebel={"Team Managers"}
            menu={["Team Create ", "Team Details "]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
