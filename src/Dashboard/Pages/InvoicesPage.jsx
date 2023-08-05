import React from "react";

const InvoicesPage = () => {
  return (
    <div>
      <div className='bg-emerald-200 px-10 py-5'>
        <h3 className='text-5xl font-bold text-right mb-5'>INVOICE</h3>
        <form action='#'>
          <div className='flex justify-between '>
            <div className=''>
              <div class='flex items-center justify-center'>
                <label
                  for='dropzone-file'
                  class='flex flex-col items-center justify-center w-32 h-40 border-2 bg-white border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
                  <div class='flex flex-col items-center justify-center '>
                    <svg
                      class='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 16'>
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                      />
                    </svg>
                    <p class='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                      Image
                    </p>
                  </div>
                  <input id='dropzone-file' type='file' class='hidden' />
                </label>
              </div>{" "}
              <input
                type='text'
                name='Who '
                className='border border-b-2 py-2.5 px-2 w-96 my-5 border-gray-700 block rounded-lg'
                placeholder='Who this invoice form'
                required
                id=''
              />
              <div className='flex gap-3 '>
                <div>
                  <label
                    className='block font-bold ms-1 text-xl'
                    htmlFor='Bill To '>
                    Bill To{" "}
                  </label>
                  <input
                    type='text'
                    name='Who '
                    className='border border-b-2 py-3 px-2 w-64 border-gray-700 block rounded-lg'
                    placeholder='Required'
                    required
                  />
                </div>
                <div>
                  <label
                    className='block font-bold ms-1 text-xl'
                    htmlFor='Bill To '>
                    Ship To{" "}
                  </label>
                  <input
                    type='text'
                    name='Who '
                    className='border border-b-2 py-3 px-2 w-64 border-gray-700 block rounded-lg'
                    placeholder='Optional'
                  />
                </div>
              </div>
            </div>
            <div className=''>
              <div className='flex my-3 justify-end'>
                <p className='bg-slate-200 px-3 py-2 shadow-xl'>#</p>
                <input className='w-10 px-2' type='number' name='number' />
              </div>
              <div className='flex justify-end'>
                <select className='select select-bordered  max-w-xs'>
                  <option disabled selected>
                    Currency
                  </option>
                  <option>USA</option>
                  <option>BDT</option>
                </select>
              </div>
              <div className='my-3 flex justify-between'>
                <label className='text-xl font-bold mr-2' htmlFor='Date'>
                  Date
                </label>
                <input
                  type='date'
                  className='w-52 px-2  py-1 font-semibold rounded  text-lg'
                  name='date'
                  id=''
                />
              </div>
              <div className='my-3 flex justify-between'>
                <label className='text-lg font-bold mr-2' htmlFor='Due_Date'>
                  Due
                </label>
                <input
                  type='date'
                  className='w-52 px-2 py-1 font-semibold rounded text-lg'
                  name='date'
                  id=''
                />
              </div>
              <div className='my-3 flex justify-between'>
                <label className='text-lg font-bold mr-2' htmlFor=''>
                  Payment Terms
                </label>
                <input type='text' name='terms' className='rounded px-1 py-2' />
              </div>
              <div className='my-3 flex justify-between'>
                <label className='text-lg font-bold mr-2' htmlFor=''>
                  P/O Number
                </label>
                <input
                  type='text'
                  name='terms'
                  className='rounded  px-1 py-2'
                />
              </div>
            </div>
          </div>

          <table className='table-auto my-5'>
            <thead className='my-10'>
              <tr className='bg-gray-800 text-white my-10'>
                <th className='text-center py-1.5'>Item</th>
                <th className='text-center'>Quantity</th>
                <th className='text-center'>Rate</th>
                <th className='text-center'>Amount</th>
              </tr>
            </thead>
            <tbody className='my-3'>
              <tr className='my-10'>
                <td className=' '>
                  <input
                    type='text'
                    name=''
                    className='border py-1.5 mx-2 my-1 px-1 w-96  rounded-sm border-black'
                    id=''
                  />
                </td>
                <td className=''>
                  <input
                    type='text'
                    name=''
                    className='border py-1.5 mx-2 rounded-sm border-black'
                  />
                </td>
                <td className=''>
                  <input
                    type='text'
                    name=''
                    className='border py-1.5 mx-2 rounded-sm border-black'
                  />
                </td>
                <td className=''>
                  <input
                    type='text'
                    name=''
                    className='border py-1.5 mx-2 rounded-sm border-black'
                    id=''
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className='flex justify-between items-start  '>
            <div className='w-[75%]'>
              <label className='block text-xl ms-1 font-bold' htmlFor='Notes'>
                Notes
              </label>
              <input
                type='text'
                className='py-2.5 rounded outline-1 border-gray-600 border px-2 w-full'
                name='Notes'
                placeholder='Notes any relevant information you have not covered'
                id=''
              />
              <label
                className='block mt-2 ms-1 font-bold text-xl'
                htmlFor='Terms'>
                Terms
              </label>
              <input
                type='text'
                className='py-2.5 rounded px-2 w-full'
                name='Terms'
                placeholder='Terms & Conditions'
                id=''
              />
            </div>
            <div className=''>
              <div className='flex jus'>
                <p className='font-semibold ms-5 text-blue-600'>
                  <span className='inline mr-2 text-black font-bold text-lg'>
                    Subtotal
                  </span>{" "}
                  : $100
                </p>
              </div>

              <div className='flex items-center justify-end gap-3 my-2 '>
                <label
                  htmlFor='Tax'
                  className='inline  font-bold text-lg mt-2.5'>
                  Tax
                </label>
                <input
                  type='number'
                  className='h-8 w-20 rounded border border-black placeholder:text-end'
                  placeholder='%'
                  name=''
                  id=''
                />
              </div>
              <p className='font-semibold ms-5 text-blue-600'>
                <span className='inline mr-3 text-black font-bold text-lg'>
                  Total
                </span>{" "}
                : $100
              </p>
              <div className='flex justify-between items-center my-2'>
                <p className='font-bold '>Amount Paid</p>
                <input
                  type='number'
                  className='h-8 w-20 border border-black rounded placeholder:text-end'
                  name=''
                  id=''
                />
              </div>
            </div>
          </div>
          <div>
            <div className='mt-10 space-x-5'>
              <button
                type='reset'
                className=' bg-red-400 text-white px-5 py-2 rounded'>
                Reset
              </button>
              <button
                type='submit'
                className=' bg-cyan-500 text-white px-5 py-2 rounded'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoicesPage;
