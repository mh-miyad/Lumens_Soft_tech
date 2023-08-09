import { TextField } from "@mui/material";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import { Toaster, toast } from "react-hot-toast";

const TeamCreate = () => {
  const { loading, post, get, del } = useAxios();
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const skill_1 = form.skill_1.value;
    const fb_link = form.fb_link.value;
    const img = form.img.value;
    const linkedin = parseInt(form.linkedin.value);
    const insta_link = form.insta_link.value;
    const skill_2 = form.skill_2.value;
    const experience = form.experience.value;
    const email = form.email.value;
    const number = form.number.value;
    const description = form.description.value;
    const data = {
      name,
      skill_1,
      fb_link,
      linkedin,
      img,
      insta_link,
      skill_2,
      experience,
      email,
      number,
      description,
    };
    post("/teamAdd", data)
      .then((response) => {
        console.log("Response:", response);
        toast.success("Team Member Create  successfully!");
        // form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, show a toast, etc.
        toast.error("An error occurred while creating the project.");
      });
  };
  return (
    <div className='border-s-2 border-s-blue-500 shadow-2xl  rounded-lg '>
      <div className=' p-10 md:px-10 md:py-20'>
        <form action='#' onSubmit={handelSubmit}>
          <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 '>
            <TextField
              id='outlined-basic'
              type='text'
              label='Add Image'
              name='img'
              variant='outlined'
              autoComplete='off'
              placeholder='Provide here Direct Image Link '
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Facebook'
              name='fb_link'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Full Name'
              type='text'
              name='name'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Instagram'
              type='text'
              name='insta_link'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Skills '
              name='skill_1'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Linkedin Link '
              name='linkedin'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />

            <TextField
              id='outlined-basic'
              label='Skill(Optional)'
              name='skill_2'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />

            <TextField
              id='outlined-basic'
              label='Personal Info  '
              name='description'
              type='text'
              variant='outlined'
              autoComplete='off'
              maxRows={10}
              multiline
              className='border-none  focus:border-none row-span-5'
            />
            <TextField
              id='outlined-basic'
              label='Experience '
              name='experience'
              type='text'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />

            <TextField
              id='outlined-basic'
              label='Email Address'
              name='email'
              type='email'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />
            <TextField
              id='outlined-basic'
              label='Mobile Number '
              name='number'
              type='number'
              variant='outlined'
              autoComplete='off'
              className='border-none  focus:border-none'
            />

            <div className=' '>
              <button
                type='reset'
                className=' bg-cyan-400 text-white px-5 py-2 rounded uppercase font-bold'>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default TeamCreate;
