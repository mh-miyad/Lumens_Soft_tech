import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo (2).svg";
import { Link, NavLink } from "react-router-dom";
// import DynamicDrop from "../Dropdown/DynamicDrop";
import { Dropdown } from "flowbite-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [drop, setdrop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });
    const menu = document.querySelector(".menu");
    const openMenuBtn = document.querySelector(".open-menu-btn");
    const colseMenuBtn = document.querySelector(".close-menu-btn");

    [openMenuBtn, colseMenuBtn].forEach((btn) => {
      btn.addEventListener("click", () => {
        menu.style.transition = "transform 0.5s ease";
      });
    });
  }, []);
  const [menu1, setMenu] = useState([
    {
      name: "web development",
    },
    {
      name: "web development",
    },
    {
      name: "web development",
    },
    {
      name: "web development",
    },
    {
      name: "web development",
    },
    {
      name: "web development",
    },
    {
      name: "web development",
    },
  ]);
  return (
    <div>
      <header className='header '>
        <div className='container mx-auto  '>
          <div className='logo '>
            <a href='#' className=''>
              {" "}
              <img src={logo} alt='logo' className=' h-20' />
            </a>
          </div>

          <nav
            className={`menu ${
              isOpen ? "open" : ""
            } transition-all duration-300 delay-75 ease-in`}>
            <div className='head'>
              <img src={logo} alt='' />
              <button
                type='button'
                className='close-menu-btn'
                onClick={() => setOpen(false)}></button>
            </div>

            <ul>
              <li className=' '>
                <a href='/'>Home</a>
              </li>
              <li className=' '>
                <NavLink to={"/about"}>About Us </NavLink>
              </li>

              <li
                className={`py-2 px-4  relative  ${
                  drop
                    ? " rounded-xl cursor-pointer transition-all bg-[#080A28]  duration-150 ease-linear delay-100   "
                    : ""
                }`}>
                <div className='flex justify-between items-center gap-3'>
                  <NavLink to={"/services"}>Services </NavLink>
                  <div className=''>
                    {drop ? (
                      <svg
                        onClick={() => setdrop(!drop)}
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        class='bi bi-caret-down-fill cursor-pointer text-white'
                        viewBox='0 0 16 16'>
                        <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
                      </svg>
                    ) : (
                      <svg
                        onClick={() => setdrop(!drop)}
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        class='bi bi-caret-right-fill text-white cursor-pointer'
                        viewBox='0 0 16 16'>
                        <path d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z' />
                      </svg>
                    )}
                  </div>
                </div>
                <ul
                  className={`${
                    drop
                      ? "inline-block absolute text-white rounded-lg  py-2 bg-[#3A84A3] lg:bg-[#080A28]   transition-all duration-150 delay-150 ease-in-out  "
                      : "hidden"
                  } `}>
                  {menu1?.map((e) => (
                    <li className=' divide-y-2 divide-white flex items-center gap-2  rounded-lg bg-[#3A84A3] lg:bg-[#080A28] '>
                      <Link to={`/serviceDetails/${e?._id}`}>
                        <div className='cursor-pointer my-2  bg-[#3A84A3]  lg:bg-[#080A28]  hover:lg:bg-[#0d1144]  hover:font-extrabold text-sm px-5 py-2 lg:w-60 '>
                          {e.name}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className=' '>
                <NavLink to={"/blogs"}>Blogs</NavLink>
              </li>
              <li className=' '>
                <NavLink to={"/team"}>Team</NavLink>
              </li>

              <li className=' '>
                <NavLink to={"/contact"}>Contact us</NavLink>
              </li>
            </ul>
          </nav>
          <div className='header-right'>
            <a href='contact.html' className='quote-btn'>
              get a quote
            </a>
            <button
              type='button'
              className='open-menu-btn'
              onClick={() => setOpen(true)}>
              <span className='under-line line-1'></span>
              <span className='under-line line-2'></span>
              <span className='under-line line-3'></span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
