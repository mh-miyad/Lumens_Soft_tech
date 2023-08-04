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
import { BsFillBellFill, BsGridFill, BsMoonFill } from "react-icons/bs";
import { Avatar } from "flowbite-react";

const Sidebar = () => {
  const { openMenu } = useContext(AuthContext);
  return (
    <div>
      {" "}
      <div
        className={`${
          openMenu
            ? " translate-x-0 transition-all  ease-in-out duration-700 delay-100 bg-[#032046] text-white min-h-screen  w-72 py-4 "
            : " -translate-x-[100vw] opacity-0 inset-0 w-0 transition-all duration-500  delay-150ease-in-out"
        }`}>
        <div className='px-5'>
          <img src={logo} alt='' className='w-10/12' />
        </div>
        <div>
          <div className=' md:hidden '>
            <div className='text-center '>
              <Avatar
                size={"xl"}
                img={"https://i.ibb.co/cYDsgQt/team-mem.png"}
                rounded
                bordered
              />
              <div>
                <p className='text-xl'>AZMIR UDDIN </p>
                <p> Admin </p>
              </div>
            </div>
          </div>
        </div>
        <ul className='text-xl mx-3 space-y-3   '>
          <li className='text-cyan-400 font-bold'>Menu</li>
          <DropDownMenu
            icon={<AiOutlineDashboard />}
            lebel={"Dashboard"}
            menu={[
              { name: "Create Pages ", router: "create_page" },
              { name: "Project List", router: "project_list" },
              { name: "Client List " },
            ]}
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
            menu={[
              { name: "About Us" },
              { name: "Blog", router: "blogSection" },
              { name: "Services" },
              { name: "Landing Page" },
            ]}
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
              { name: "buttons" },
              { name: "Alerts" },
              { name: "Progress Bar" },
              { name: "Number Counter " },
              { name: "Service Control " },
              { name: "Home carousel" },
              { name: " Testimonials" },
              { name: " Dropdown Menu " },
            ]}
          />
          <DropDownMenu
            icon={<LiaFileInvoiceDollarSolid />}
            lebel={"Invoices"}
            menu={[{ name: "Invoices List " }]}
          />
          <DropDownMenu
            icon={<HiOutlineMail />}
            lebel={"Email"}
            menu={[{ name: "Inbox" }, { name: "Templates" }]}
          />
          <DropDownMenu
            icon={<FaUsers />}
            lebel={"Team Managers"}
            menu={[{ name: "Team Create " }, { name: "Team Details " }]}
          />
          <li className='flex md:hidden '>
            <BsGridFill className='mx-4 w-7 h-8 text-white ' />
            <BsMoonFill className='mx-4 w-7 h-8 text-white ' />
            <BsFillBellFill className='mx-4 w-7 h-8 text-white ' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
