import React from "react";
import Table from "../DashComponents/Table";
import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { toast } from "react-hot-toast";
import { Spinner } from "flowbite-react";

const ProjectList = () => {
  const { loading, get, del } = useAxios();
  const [data, setData] = useState([]);
  useEffect(() => {
    // Example GET request
    get("/allProjectList")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, [data]);
  const deleteData = (id) => {
    del(`/deleteOne/${id}`)
      .then((response) => {
        console.log("DELETE Response:", response);
        toast.success(response.message);
      })
      .catch((error) => {
        console.error("DELETE Error:", error);
      });
  };
  return (
    <>
      {loading ? (
        <>
          <div className='flex justify-center '>
            <Spinner color={"purple"} size={"xl"} />
          </div>
        </>
      ) : (
        <Table data={data} deleteData={deleteData} key={data} />
      )}
    </>
  );
};

export default ProjectList;
