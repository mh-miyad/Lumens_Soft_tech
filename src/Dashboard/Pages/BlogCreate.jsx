import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { useEffect } from "react";
import useAxios from "../../Hooks/useAxios";
import { Toaster, toast } from "react-hot-toast";
import { Table } from "flowbite-react";

const BlogCreate = () => {
  const [data, setData] = useState([]);
  const { loading, post, get, del } = useAxios();
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const stripHtmlTags = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.innerText;
  };
  const blogSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = e.target.title.value;
    const blog = e.target.content.value;
    const data = {
      blogTitle: title,
      mainBlog: blog,
    };
    post("/blogAdd", data)
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
  useEffect(() => {
    // Example GET request
    get("/blogList")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, [data]);
  const deleteData = (id) => {
    del(`/blogDelete/${id}`)
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
      <h2 className='text-center my-5 text-xl md:text-2xl lg:text-4xl'>
        {" "}
        Write New Blog is Here{" "}
      </h2>
      <form action='#' onSubmit={blogSubmit}>
        <div className='mx-auto px-10'>
          <div className='my-5'>
            <label
              htmlFor='title'
              className='text-2xl text-slate-600 font-extrabold md:text-4xl mb-1'>
              Title
            </label>
            <input
              type='text'
              name='title'
              className='border w-full  '
              placeholder='Write Your Blog Title Here  '
            />
          </div>
          <JoditEditor
            ref={editor}
            value={content}
            name='content'
            tabIndex={1} // tabIndex of textarea
            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={(newContent) => {
              setContent(newContent);
            }}
          />
        </div>
        <div className='mt-5  w-1/2 mx-auto '>
          <button
            type='submit'
            className='bg-indigo-500 px-4 py-2 font-extrabold text-white rounded-xl'>
            {" "}
            Post This Blog{" "}
          </button>
        </div>
      </form>
      <div className='px-10  my-10 '>
        <h2> Preview here </h2>

        <Table>
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Title</Table.HeadCell>

            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y'>
            {data.map((ele) => (
              <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                <Table.Cell>{ele?._id}</Table.Cell>
                <Table.Cell>{ele?.blogTitle}</Table.Cell>

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

export default BlogCreate;

// import React from "react";
// import { useState } from "react";
// // import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import ReactQuill, { Quill } from "react-quill";
// const BlogCreate = () => {
//   const [value, setValue] = useState("");
//   return (
//     <div>
//       <ReactQuill Quill theme='snow' value={value} onChange={setValue} />
//     </div>
//   );
// };

// export default BlogCreate;
