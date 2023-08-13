import React, { useContext } from "react";
import logo from "../../assets/lumenlogo/lumenlogo/lumensofttech-01.svg";

import { AiOutlineDashboard, AiFillAppstore } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { FaLayerGroup, FaUsers } from "react-icons/fa";
import { FcGenealogy } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import DropDownMenu from "./DropDown/DropDownMenu";
import { AuthContext } from "../../Auth/AuthProvider";

import { BsFillBellFill, BsGridFill, BsMoonFill } from "react-icons/bs";
import { Avatar } from "flowbite-react";

const Sidebar = () => {
  const { setOpen, openMenu } = useContext(AuthContext);
  return (
    <div>
      <div
        className={`${
          openMenu
            ? "translate-x-0 transition-all ease-in-out duration-700 delay-100 bg-[#032046] text-white h-screen w-72 py-4"
            : "-translate-x-[100vw] opacity-0 inset-0 w-0 transition-all duration-500 delay-150 ease-in-out"
        } fixed top-0 left-0 bottom-0`}>
        <div className='px-5'>
          <div>
            <RxCross1
              className='w-10 h-10 text-red-500 top-0 right-0 fixed mr-5 my-2 cursor-pointer'
              onClick={() => setOpen(!openMenu)}
            />
          </div>
          <img src={logo} alt='' className='h-20' />
        </div>
        <div>
          <div className='md:hidden'>
            <div className='text-center'>
              <Avatar
                size={"lg"}
                img={"https://i.ibb.co/cYDsgQt/team-mem.png"}
                rounded
                bordered
              />
              <div>
                <p className='text-lg'>AZMIR UDDIN</p>
                <p>Admin</p>
              </div>
            </div>
          </div>
        </div>
        <div className='h-[calc(100vh-200px)] overflow-auto'>
          <ul className='text-xl mx-3 space-y-3   '>
            <li className='text-cyan-400 font-bold'>Menu</li>
            <DropDownMenu
              icon={<AiOutlineDashboard />}
              lebel={"Dashboard"}
              menu={[
                { name: "Create Project ", router: "create_page" },
                { name: "Project List", router: "project_list" },
                { name: "Client List ", router: "client_list" },
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
                { name: "About Us", router: "about_page" },
                { name: "Blog", router: "blogSection" },
                { name: "Services", router: "service_page" },
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
                // { name: "buttons" },
                // { name: "Alerts" },
                // { name: "Progress Bar" },
                // { name: "Number Counter " },
                // { name: "Service Control " },
                // { name: "Home carousel" },
                // { name: " Testimonials" },
                { name: " Dropdown Menu ", router: "daynamic_Dropdown" },
              ]}
            />
            <DropDownMenu
              icon={<LiaFileInvoiceDollarSolid />}
              lebel={"Invoices"}
              menu={[{ name: "Invoices List ", router: "invoices_page" }]}
            />
            <DropDownMenu
              icon={<HiOutlineMail />}
              lebel={"Email"}
              menu={[{ name: "Inbox", router: "inbox" }, { name: "Templates" }]}
            />
            <DropDownMenu
              icon={<FaUsers />}
              lebel={"Team Managers"}
              menu={[
                { name: "Team Create ", router: "team_list" },
                { name: "Team Details ", router: "team_details" },
              ]}
            />
            <li className='flex md:hidden '>
              <BsGridFill className='mx-4 w-7 h-8 text-white ' />
              <BsMoonFill className='mx-4 w-7 h-8 text-white ' />
              <BsFillBellFill className='mx-4 w-7 h-8 text-white ' />
            </li>
          </ul>
        </div>
        <div className='flex md:hidden absolute bottom-0 w-full'>
          <BsGridFill className='mx-4 w-7 h-8 text-white' />
          <BsMoonFill className='mx-4 w-7 h-8 text-white' />
          <BsFillBellFill className='mx-4 w-7 h-8 text-white' />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
