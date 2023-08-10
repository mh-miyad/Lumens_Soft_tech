import React from "react";
import news6 from "../../assets/images/news-6.jpg";
const BlogCard = () => {
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

      <a href='/technology.html' class='blog-btn'>
        Read Blog
      </a>
    </div>
  );
};

export default BlogCard;
