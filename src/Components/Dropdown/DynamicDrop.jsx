import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DynamicDrop = ({ lebel, menu, router }) => {
  const [drop, setdrop] = useState(false);
  return (
    <li
      className={`py-2 px-4 hover:bg-[#080A28]   ${
        drop
          ? " rounded-xl cursor-pointer transition-all duration-150 ease-linear delay-100"
          : ""
      }`}
      onClick={() => setdrop(!drop)}>
      <div className=''>
        {drop ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-caret-down-fill text-white'
            viewBox='0 0 16 16'>
            <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-caret-right-fill text-white'
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
          <li className=' flex items-center gap-2 bg-[#080A28] p-2 '>
            <Link to={`/serviceDetails/${e?._id}`}>
              <div className='cursor-pointer'>{e.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
export default DynamicDrop;
