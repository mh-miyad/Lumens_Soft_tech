import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../../Auth/AuthProvider";
const NavbarComp = () => {
  const { setOpen, openMenu } = useContext(AuthContext);
  // const [isOpen, setOpenMenu] = useState(false);
  return (
    <div>
      <div className='bg-[#130451] text-white py-3 w-full flex justify-between gap-4 '>
        <div>
          <div className='ml-5'>
            <AiOutlineMenu
              className='w-8 h-8 cursor-pointer'
              onClick={() => setOpen(!openMenu)}
            />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NavbarComp;
