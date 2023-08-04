import { Avatar, Dropdown } from "flowbite-react";
import React from "react";

const ProjectList = () => {
  return (
    <div className=''>
      <div className='relative overflow-x-auto  shadow-md sm:rounded-lg'>
        <div className='relative overflow-x-auto  shadow-md sm:rounded-lg'>
          <table
            class='w-full text-sm text-left text-gray-500 dark:text-gray-400'
            style={{ overflowY: "auto" }}>
            <thead class='text-xs text-white uppercase bg-[#0D4998] dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' class='p-4'>
                  <div class='flex items-center'>
                    <label for='checkbox-all-search' class=''>
                      No.
                    </label>
                  </div>
                </th>
                <th scope='col' class='px-6 py-3'>
                  Service Name
                </th>
                <th scope='col' class='px-6 py-3'>
                  Client Name
                </th>
                <th scope='col' class='px-6 py-3'>
                  Company name
                </th>
                <th scope='col' class='px-6 py-3'>
                  Company Email
                </th>
                <th scope='col' class='px-6 py-3'>
                  Company Phone
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                <td class='w-4 p-4 bg-cyan-500 text-white'>
                  <div class='flex items-center'>
                    <label class=''>1</label>
                  </div>
                </td>

                <th scope='row' class='px-6 py-4 bg-[#4181D6] text-white'>
                  Web development
                </th>
                <td class='px-6 py-4 bg-[#4181D6] text-white font-medium whitespace-nowrap dark:text-white'>
                  Azmir uddin
                </td>

                <td class='px-6 py-4 bg-[#4181D6] text-white'>XYZ</td>

                <td class='px-6 py-4 bg-[#4181D6] text-white'>
                  {" "}
                  xyz@gmail.com
                </td>
                <td class='px-6 py-4 bg-[#4181D6] text-white'> 102910290129</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
