import React from "react";
import news6 from "../../assets/images/news-6.jpg";
import { Link } from "react-router-dom";
const BlogCard = ({ id }) => {
  return (
    <div>
      <div class='AllBlogFeaturesMainImg'>
        <img src={news6} alt='' />
      </div>
      <h4 class='articleTitle'>How to convert A static site with React</h4>
      <p class='articalContent'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        facere? Quaerat iste inventore doloremque exercitationem! ....
      </p>

      <Link to={`/blogDetails/${id}`} class='blog-btn'>
        Read Blog
      </Link>
    </div>
  );
};

export default BlogCard;
