import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { Toaster, toast } from "react-hot-toast";

const ProjectList = () => {
  const { loading, error, get, put, del, patch } = useAxios();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Example GET request
    get("/allProjectList")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, [data]);
  const deleteData = (id) => {
    del(`/deleteOne/${id}`)
      .then((response) => {
        console.log("DELETE Response:", response);
        toast.success(response.message);
      })
      .catch((error) => {
        console.error("DELETE Error:", error);
      });
  };

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
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((ele, index) => (
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
              <td className='px-6 py-4 bg-[#4181D6] text-white'>
                <button className='bg-red-500 px-3 py-2 rounded-xl drop-shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-red-300 active:drop-shadow-md'>
                  <span
                    className='font-extrabold'
                    onClick={() => deleteData(ele._id)}>
                    Delete
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
};

export default ProjectList;
