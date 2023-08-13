import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropDownMenu = ({ icon, lebel, menu, router }) => {
  const [drop, setdrop] = useState(false);
  return (
    <li
      className={`py-2 px-4 hover:bg-[#0f2f5a]   ${
        drop
          ? " rounded-xl cursor-pointer transition-all duration-150 ease-linear delay-100"
          : ""
      }`}
      onClick={() => setdrop(!drop)}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4 '>
          {" "}
          {icon} <span className='cursor-pointer'>{lebel}</span>
        </div>
        {drop ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-caret-down-fill'
            viewBox='0 0 16 16'>
            <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-caret-right-fill'
            viewBox='0 0 16 16'>
            <path d='m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z' />
          </svg>
        )}
      </div>
      <ul
        className={`${
          drop ? "block" : "hidden"
        } text-white rounded-lg   py-2 mx-2   transition-all duration-150 delay-150 ease-in-out space-y-4`}>
        {menu?.map((e) => (
          <li className=' flex items-center gap-2 bg-[#062F65] p-2 '>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-circle text-cyan-400 '
                viewBox='0 0 16 16'>
                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
              </svg>
            </div>

            <Link to={`/admin/${e?.router}`}>
              <div className='cursor-pointer'>{e.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropDownMenu;
