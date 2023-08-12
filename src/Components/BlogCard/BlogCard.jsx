import React from "react";
import news6 from "../../assets/images/news-6.jpg";
import { Link } from "react-router-dom";
const BlogCard = ({ _id, img, shortTitle, blogTitle }) => {
  return (
    <div>
      <div class='AllBlogFeaturesMainImg'>
        <img src={img} alt='' />
      </div>
      <h4 class='articleTitle'> {blogTitle}</h4>
      <p class='articalContent'>{shortTitle}</p>

      <Link to={`/blogDetails/${_id}`} class='blog-btn'>
        Read Blog
      </Link>
    </div>
  );
};

export default BlogCard;
