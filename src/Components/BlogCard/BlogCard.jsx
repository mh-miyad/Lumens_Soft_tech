import React from "react";
import news6 from "../../assets/images/news-6.jpg";
import { Link } from "react-router-dom";
const BlogCard = ({ _id, img, shortTitle, blogTitle }) => {
  return (
    <div>
      <div className='AllBlogFeaturesMainImg'>
        <img src={img} alt='' />
      </div>
      <h4 className='articleTitle'> {blogTitle}</h4>
      <p className='articalContent'>{shortTitle}</p>

      <Link to={`/blogDetails/${_id}`} className='blog-btn'>
        Read Blog
      </Link>
    </div>
  );
};

export default BlogCard;
