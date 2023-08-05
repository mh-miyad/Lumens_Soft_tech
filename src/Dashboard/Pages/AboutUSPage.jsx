import { TextField } from "@mui/material";
import React from "react";

const AboutUSPage = () => {
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const ourMission = form.ourMission.value;

    const ourValue = form.ourValue.value;
    const ourVision = form.ourVision.value;

    const data = {
      ourMission,

      ourValue,

      ourVision,
    };
    console.log(data);
  };
  return (
    <div className=''>
      <div className=' px-10  py-20'>
        <form action='#' onSubmit={handelSubmit}>
          <div className=' grid grid-cols-1 space-y-7'>
            <TextField
              id='outlined-basic'
              label='Our Mission '
              type='text'
              name='ourMission'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              type='text'
              label='Our Vision '
              name='ourVision'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Our Value'
              name='ourValue'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
          </div>
          <div className='mt-10 space-x-5 flex '>
            <button
              type='reset'
              className=' bg-red-400 text-white px-4 py-2 rounded'>
              Cancel
            </button>
            <button
              type='submit'
              className=' bg-cyan-500 text-white px-4 py-2 rounded'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutUSPage;
