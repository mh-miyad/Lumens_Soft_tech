import axios from "axios";
import { Avatar, Dropdown } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProjectList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/allProjectList")
      .then(function (response) {
        setData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
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
          {data.map((ele, index) => (
            <tr
              key={ele._id}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <td className='w-4 p-4 bg-cyan-500 text-white'>
                <div className='flex items-center'>
                  <label>{index + 1}</label>
                </div>
              </td>

              <th scope='row' className='px-6 py-4 bg-[#4181D6] text-white'>
                {ele.serviceName}
              </th>
              <td className='px-6 py-4 bg-[#4181D6] text-white font-medium whitespace-nowrap dark:text-white'>
                {ele.clientName}
              </td>

              <td className='px-6 py-4 bg-[#4181D6] text-white'>
                {ele.companyName}
              </td>

              <td className='px-6 py-4 bg-[#4181D6] text-white'>
                {ele.companyEmail}
              </td>
              <td className='px-6 py-4 bg-[#4181D6] text-white'>
                {ele.companyPhone}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
