import { Table } from "flowbite-react";
import React from "react";
import useAxios from "../../Hooks/useAxios";
import { useEffect } from "react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const InboxEmail = () => {
  const { loading, get, del } = useAxios();
  const [data, setData] = useState([]);
  useEffect(() => {
    // Example GET request
    get("/emailList")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, [data]);
  const deleteData = (id) => {
    del(`/emailDelete/${id}`)
      .then((response) => {
        console.log("DELETE Response:", response);
        toast.success(response.message);
      })
      .catch((error) => {
        console.error("DELETE Error:", error);
      });
  };
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.HeadCell>Client name</Table.HeadCell>
          <Table.HeadCell>Email And Phone </Table.HeadCell>
          <Table.HeadCell>Subject</Table.HeadCell>
          <Table.HeadCell>Massage</Table.HeadCell>
          <Table.HeadCell>
            <span className='sr-only'>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {data?.map((e) => (
            <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
                {e?.name}
              </Table.Cell>
              <Table.Cell>
                {" "}
                <div>
                  <p>{e?.email}</p>
                  <p>{e?.phone}</p>
                </div>{" "}
              </Table.Cell>
              <Table.Cell>{e?.subject}</Table.Cell>
              <Table.Cell>
                {" "}
                <div>
                  <p>{e?.massage}</p>
                </div>
              </Table.Cell>
              <Table.Cell>
                <button
                  className=' drop-shadow-2xl rounded-lg text-white font-bold bg-red-400 px-4 py-2 '
                  onClick={() => deleteData(e._id)}>
                  <p>Delete</p>
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Toaster />
    </div>
  );
};

export default InboxEmail;
