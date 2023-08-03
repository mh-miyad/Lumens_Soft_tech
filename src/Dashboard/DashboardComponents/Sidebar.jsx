import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className='bg-gray-800 text-white h-screen w-64 py-4'>
        <div className='text-2xl font-bold text-center mb-4'>Dashboard</div>
        <ul className='text-xl'>
          <li className='py-2 px-4'>Home</li>
          <li className='py-2 px-4'>Analytics</li>
          <li className='py-2 px-4'>Reports</li>
          <li className='relative group py-2 px-4'>
            <span>Dropdown</span>
            <ul className='absolute hidden bg-gray-700 text-white rounded-lg p-2 group-hover:block'>
              <li className='py-1 px-2'>Option 1</li>
              <li className='py-1 px-2'>Option 2</li>
              <li className='py-1 px-2'>Option 3</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
