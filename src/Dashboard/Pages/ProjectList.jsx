import { Avatar, Dropdown } from "flowbite-react";
import React from "react";

const ProjectList = () => {
  return (
    <div className='overflow-x-scroll'>
      <div className='relative  shadow-md sm:rounded-lg'>
        <div className='sm:w-full'>
          <table className='w-full text-sm  text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-white uppercase bg-[#0D4998] dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='p-4'>
                  <div className='flex items-center'>
                    <label htmlFor='checkbox-all-search'>No.</label>
                  </div>
                </th>
                <th scope='col' className='px-6 py-3'>
                  Service Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Client Name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Company name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Company Email
                </th>
                <th scope='col' className='px-6 py-3'>
                  Company Phone
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td className='w-4 p-4 bg-cyan-500 text-white'>
                  <div className='flex items-center'>
                    <label>1</label>
                  </div>
                </td>

                <th scope='row' className='px-6 py-4 bg-[#4181D6] text-white'>
                  Web development
                </th>
                <td className='px-6 py-4 bg-[#4181D6] text-white font-medium whitespace-nowrap dark:text-white'>
                  Azmir uddin
                </td>

                <td className='px-6 py-4 bg-[#4181D6] text-white'>XYZ</td>

                <td className='px-6 py-4 bg-[#4181D6] text-white'>
                  xyz@gmail.com
                </td>
                <td className='px-6 py-4 bg-[#4181D6] text-white'>
                  102910290129
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
