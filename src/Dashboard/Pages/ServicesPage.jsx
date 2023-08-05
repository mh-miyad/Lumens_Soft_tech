import { TextField } from "@mui/material";
import React from "react";

const ServicesPage = () => {
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const short2 = form.short2.value;
    const des2 = form.des2.value;
    const short1 = form.short1.value;
    const title = form.title.value;
    const short3 = parseInt(form.short3.value);
    const des1 = form.des1.value;
    const des3 = form.des3.value;
    const des4 = form.des4.value;
    const content = form.content.value;
    const short4 = form.short4.value;
    const data = {
      short2,
      des2,
      short1,
      short3,
      title,
      des1,
      short4,
      des3,
      des4,
      content,
    };
    console.log(data);
  };
  return (
    <div className='border-s-2 border-s-blue-500 shadow-2xl  rounded-lg '>
      <div className=' p-10 md:px-10 md:py-20'>
        <form action='#' onSubmit={handelSubmit}>
          <h2 className='  mb-10 border-l-4 text-2xl md:w-1/2 mx-auto  border-l-blue-800 rounded'>
            {" "}
            Service page{" "}
          </h2>

          <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 '>
            <TextField
              id='outlined-basic'
              type='text'
              label='Title '
              name='title'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none col-span-2'
            />
            <TextField
              id='outlined-basic'
              label='Short Title  One '
              name='short1'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Short title Two'
              type='text'
              name='short2'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='description1'
              type='text'
              name='des1'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Description'
              name='des2'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Short Description three'
              name='short3'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Short Description four '
              name='short4'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Description '
              name='des3'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Description '
              name='des4'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Contents'
              name='content'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none col-span-2'
            />
          </div>
          <div className='mt-10 space-x-5'>
            <button
              type='reset'
              className=' bg-red-400 text-white px-5 py-2 rounded'>
              Cancel
            </button>
            <button
              type='submit'
              className=' bg-cyan-500 text-white px-5 py-2 rounded'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServicesPage;
