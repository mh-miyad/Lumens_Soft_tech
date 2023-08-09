import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import useAxios from "../../Hooks/useAxios";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import Table from "../DashComponents/Table";

const CreateClientList = () => {
  const { loading, post, get, del } = useAxios();
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const companyEmail = form.companyEmail.value;
    const companyName = form.companyName.value;
    const clientName = form.clientName.value;
    const companyPhone = parseInt(form.companyPhone.value);
    const country = form.country.value;
    const address = form.address.value;
    const data = {
      serviceName,
      companyEmail,
      companyName,
      companyPhone,
      clientName,
      country,
      address,
    };
    post("/createClient", data)
      .then((response) => {
        console.log("Response:", response);
        toast.success("Project created successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, show a toast, etc.
        toast.error("An error occurred while creating the project.");
      });
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    // Example GET request
    get("/allClientList")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, [data]);
  const deleteData = (id) => {
    del(`/clientDelete/${id}`)
      .then((response) => {
        console.log("DELETE Response:", response);
        toast.success(response.message);
      })
      .catch((error) => {
        console.error("DELETE Error:", error);
      });
  };

  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };
  return (
    <>
      <div>
        <button
          className='bg-[#40c9ef] hover:bg-[#5abad5] px-3 my-3 py-3 font-extrabold text-white drop-shadow-2xl  ml-10 rounded-lg'
          onClick={() => setOpenModal("default")}>
          Create Client List{" "}
        </button>
      </div>
      <Modal
        size={"4xl"}
        show={props.openModal === "default"}
        onClose={() => props.setOpenModal(undefined)}>
        <Modal.Body>
          <div className='border-s-2 border-s-blue-500 shadow-2xl  rounded-lg '>
            <div className=' p-10 md:px-10 md:py-20'>
              <form action='#' onSubmit={handelSubmit}>
                <h2 className='  mb-10 border-l-4 text-2xl md:w-1/2 mx-auto  border-l-blue-800 rounded'>
                  {" "}
                  Create Client List{" "}
                </h2>

                <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 '>
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
                    label='Service Name'
                    type='text'
                    name='serviceName'
                    variant='outlined'
                    autoComplete='off'
                    className='border-none  focus:border-none'
                  />
                  <TextField
                    id='outlined-basic'
                    label='Country'
                    type='text'
                    name='country'
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
                  <TextField
                    id='outlined-basic'
                    label='Company  Address'
                    name='address'
                    type='text'
                    variant='outlined'
                    autoComplete='off'
                    className='border-none  focus:border-none'
                  />
                </div>
                <div className='mt-10 space-x-5 flex '>
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
        </Modal.Body>
        <Modal.Footer>
          <Button color='purple' onClick={() => props.setOpenModal(undefined)}>
            <span className='font-bold drop-shadow-2xl uppercase'> close</span>
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <Table data={data} deleteData={deleteData} key={data} value={true} />
      </div>
      <Toaster />
    </>
  );
};

export default CreateClientList;
