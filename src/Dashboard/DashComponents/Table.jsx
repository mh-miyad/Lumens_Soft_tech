import React from "react";
import { Toaster, toast } from "react-hot-toast";
import TableRow from "./TableRow";

const Table = ({ data, deleteData, value }) => {
  return (
    <div className='px-10 overflow-auto'>
      <div class='relative overflow-x-scroll shadow-md sm:rounded-lg'>
        <table className='w-full text-sm  text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-white uppercase bg-[#0D4998] dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center'>
                  <label htmlFor='checkbox-all-search'>No.</label>
                </div>
              </th>
              <th scope='col' className='px-6 py-3'>
                Client Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Company name
              </th>
              <th scope='col' className='px-6 py-3'>
                Service Name
              </th>
              {value ? (
                <th scope='col' className='px-6 py-3'>
                  Country
                </th>
              ) : (
                ""
              )}
              <th scope='col' className='px-6 py-3'>
                Company Email
              </th>
              <th scope='col' className='px-6 py-3'>
                Company Phone
              </th>
              {value ? (
                <th scope='col' className='px-6 py-3'>
                  Company Address
                </th>
              ) : (
                ""
              )}
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((ele, index) => (
              <TableRow
                ele={ele}
                key={ele?._id}
                index={index}
                deleteData={deleteData}
                value={value}
              />
            ))}
          </tbody>
        </table>
        <Toaster position='top-center' reverseOrder={false} />
      </div>
    </div>
  );
};

export default Table;
