import { TextField } from "@mui/material";
import React from "react";

const CreatePageComp = () => {
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const companyEmail = form.companyEmail.value;
    const companyName = form.companyName.value;
    const clientName = form.clientName.value;
    const companyPhone = parseInt(form.companyPhone.value);
    const data = {
      serviceName,
      companyEmail,
      companyName,
      companyPhone,
      clientName,
    };
    console.log(data);
  };
  return (
    <div className='border'>
      <div className='px-10 py-20'>
        <form action='#' onSubmit={handelSubmit}>
          <h2 className='  mb-10 border-l-4 text-2xl w-1/2 mx-auto  border-l-blue-800 rounded'>
            {" "}
            Create New Project{" "}
          </h2>

          <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 '>
            <TextField
              id='outlined-basic'
              label='Service Name'
              type='text'
              name='serviceName'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              type='text'
              label='Client Name'
              name='clientName'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Company Name'
              name='companyName'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Company Email Address '
              name='companyEmail'
              type='email'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Company Phone'
              name='companyPhone'
              type='number'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
          </div>
          <div className='mt-10 space-x-5'>
            <button
              type='reset'
              className=' bg-red-400 text-white px-3 py-2 rounded-2xl'>
              Cancel
            </button>
            <button
              type='submit'
              className=' bg-cyan-500 text-white px-3 py-2 rounded-2xl'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePageComp;
