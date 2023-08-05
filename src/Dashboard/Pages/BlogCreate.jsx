import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const BlogCreate = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const stripHtmlTags = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.innerText;
  };

  console.log(stripHtmlTags(content));
  return (
    <div>
      <h2 className='text-center my-5 text-xl md:text-2xl lg:text-4xl'>
        {" "}
        Write New Blog is Here{" "}
      </h2>
      <div className='px-5'>
        <JoditEditor
          ref={editor}
          value={content}
          className=''
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {
            setContent(newContent);
          }}
        />
      </div>
      <div className='px-10  my-10 '>
        <h2> Preview here </h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
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
