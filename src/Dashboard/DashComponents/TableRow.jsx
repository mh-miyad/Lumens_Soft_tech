import React from "react";

const TableRow = ({ ele, index, deleteData, value }) => {
  return (
    <tr
      key={ele?._id}
      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <td className='w-4 p-4 bg-cyan-500 text-white'>
        <div className='flex items-center'>
          <label>{index + 1}</label>
        </div>
      </td>
      <td className='px-6 py-4 bg-[#4181D6] text-white font-medium whitespace-nowrap dark:text-white'>
        {ele?.clientName}
      </td>
      <td className='px-6 py-4 bg-[#4181D6] text-white'>{ele?.companyName}</td>
      <th scope='row' className='px-6 py-4 bg-[#4181D6] text-white'>
        {ele?.serviceName}
      </th>
      {value ? (
        <td className='px-6 py-4 bg-[#4181D6] text-white'>{ele?.country}</td>
      ) : (
        ""
      )}
      <td className='px-6 py-4 bg-[#4181D6] text-white'>{ele?.companyEmail}</td>
      <td className='px-6 py-4 bg-[#4181D6] text-white'>{ele?.companyPhone}</td>
      {value ? (
        <td className='px-6 py-4 bg-[#4181D6] text-white'>{ele?.address}</td>
      ) : (
        ""
      )}
      <td className='px-6 py-4 bg-[#4181D6] text-white'>
        <button className='bg-red-500 px-3 py-2 rounded-xl drop-shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-red-300 active:drop-shadow-md'>
          <span className='font-extrabold' onClick={() => deleteData(ele?._id)}>
            Delete
          </span>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
