import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    setUser,

    userName,
    adminPassword,

    setLoading,

    setAdmin,
  } = useContext(AuthContext);
  const handleForm = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;

    const name = form.admin.value;
    const pass = form.password.value;
    if (name === userName && pass === adminPassword) {
      setAdmin(true);
      setUser(true);
      setLoading(false);
      form.reset();
      navigate("/admin");
    } else {
      setLoading(true);
      setAdmin(false);
      setUser(false);
    }
  };

  return (
    <div className=''>
      <div className='h-72  flex justify-center items-center text-5xl uppercase bg-gradient-to-tr from-fuchsia-900 via-indigo-900 to-blue-900 text-white '>
        Please Log In
      </div>
      <div className=' mt-20 px-10'>
        <form
          className='flex max-w-xl flex-col gap-4 mx-auto '
          onSubmit={handleForm}>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='email1' value='Admin  ' />
            </div>
            <TextInput
              id='email1'
              placeholder=' Write Your ..................... '
              required
              name='admin'
              type='text'
              autoComplete={false}
            />
          </div>
          <div>
            <div className='mb-2 block'>
              <Label htmlFor='password1' value=' Password' />
            </div>
            <TextInput
              id='password1'
              required
              placeholder='Write Your ............................'
              type='password'
              name='password'
              autoComplete={false}
            />
          </div>
          <div className='flex items-center gap-2'>
            <Checkbox id='remember' />
            <Label htmlFor='remember'>Remember me</Label>
          </div>
          <button
            className='w-full py-2 font-extrabold shadow-2xl shadow-purple-400 rounded-full text-white bg-purple-500 hover:bg-purple-700 '
            type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
