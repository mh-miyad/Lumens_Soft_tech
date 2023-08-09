import { Avatar, Table } from "flowbite-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useAxios from "../../Hooks/useAxios";
import { Toaster, toast } from "react-hot-toast";

const TeamDetailsDash = () => {
  const { loading, get, del } = useAxios();
  const [data, setData] = useState([]);
  useEffect(() => {
    get("/teamList")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, [data]);
  const deleteData = (id) => {
    del(`/teamDelete/${id}`)
      .then((response) => {
        console.log("DELETE Response:", response);
        toast.success(response.message);
      })
      .catch((error) => {
        console.error("DELETE Error:", error);
      });
  };
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Image</Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Skill</Table.HeadCell>

        <Table.HeadCell>Action</Table.HeadCell>
      </Table.Head>
      <Table.Body className='divide-y'>
        {data.map((ele) => (
          <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
            <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              <Avatar img={ele?.img} />
            </Table.Cell>
            <Table.Cell>{ele?.name}</Table.Cell>
            <Table.Cell>{ele?.skill_1}</Table.Cell>

            <Table.Cell>
              <button className='bg-red-500 px-3 py-2 rounded-xl drop-shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:ring-red-300 active:drop-shadow-md'>
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
  );
};

export default TeamDetailsDash;
