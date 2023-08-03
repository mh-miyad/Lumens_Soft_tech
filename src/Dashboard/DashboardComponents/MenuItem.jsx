import React from "react";

const MenuItemCom = ({ children }) => {
  return (
    <li className='py-2 text-center border-gray-300 transition-colors hover:bg-blue-500 hover:text-white'>
      {children}
    </li>
  );
};

export default MenuItemCom;
