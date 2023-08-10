import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo (2).svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
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
              <li className=' hover:bg-whit hover:text-blue-500e'>
                <NavLink to={"/services"}>Services</NavLink>
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
