import { TextField } from "@mui/material";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "flowbite-react";
import { Toaster, toast } from "react-hot-toast";

const AboutUSPage = () => {
  const [data, setData] = useState([]);
  const { loading, post, get, del } = useAxios();
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
    post("/aboutCreate", data)
      .then((response) => {
        console.log("Response:", response);
        toast.success("Services  created successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, show a toast, etc.
        toast.error("An error occurred while creating the project.");
      });
  };
  useEffect(() => {
    // Example GET request
    get("/aboutList")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, [data]);
  const deleteData = (id) => {
    del(`/aboutDelete/${id}`)
      .then((response) => {
        console.log("DELETE Response:", response);
        toast.success(response.message);
      })
      .catch((error) => {
        console.error("DELETE Error:", error);
      });
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
      <div className='px-10  my-10 '>
        <h2> Preview here </h2>

        <Table>
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Title1</Table.HeadCell>
            <Table.HeadCell>Title2</Table.HeadCell>
            <Table.HeadCell>Title3</Table.HeadCell>

            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {data.map((ele) => (
              <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell>{ele?._id}</Table.Cell>
                <Table.Cell>{ele?.ourMission}</Table.Cell>
                <Table.Cell>{ele?.ourValue}</Table.Cell>
                <Table.Cell>{ele?.ourVision}</Table.Cell>

                <Table.Cell>
                  <button className='bg-red-500 text-white px-3 py-2 rounded-xl drop-shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-red-300 active:drop-shadow-md'>
                    <span
                      className='font-extrabold'
                      onClick={() => deleteData(ele?._id)}>
                      Delete
                    </span>
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Toaster />
        </Table>
        {/* <div dangerouslySetInnerHTML={{ __html: ele?.mainBlog }} /> */}
      </div>
      <Toaster />
    </div>
  );
};

export default AboutUSPage;
