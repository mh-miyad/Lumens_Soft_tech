import React from "react";
import "./Blog.css";
import news6 from "../assets/images/news-6.jpg";

const BlogDetails = () => {
  return (
    <div>
      <section class='bloggerSlide'>
        <div class='blogSlideBox'>
          <div class='blog-carousel owl-theme owl-loaded'>
            <div class='owl-stage-outer blog-stage-outer'>
              <div class='owl-stage blog-owl-stage'>
                {/* <!-- items --> */}
                <div class='owl-item blogSlide-owl-item'>
                  <div class='blog-slider-main'>
                    <div class='blog-slider-img'></div>
                    <div class='blog-slider-img-overlay'></div>
                    <div class='blog-slider-info'>
                      <h1 class='blog-head'>
                        How to convert A static site with React
                      </h1>
                      <a href='/technology.html' class='blog-btn'>
                        Read Blog
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- items --> */}
              </div>
            </div>
            <div class='owl-nav'>
              <div class='owl-prev'>
                <i class='fa-solid fa-angle-left'></i>
              </div>
              <div class='owl-next'>
                <i class='fa-solid fa-angle-right'></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='blogBodyFeatures'>
        <div class='container'>
          <div class='row'>
            {/* <!-- left part --> */}
            <div class='col-md-8'>
              <div class='leftBlogBodyFeatureMain'>
                {/* <!-- block --> */}
                {/* <div class='AllBlogFeaturesMain'>
                  <a href='/technology.html' class='AllBlogFeaturesHead'>
                    //Technology
                  </a>
                </div> */}
                <div class='AllBlogFeaturesMain'>
                  {/* <!-- <a href="/technology.html" class="AllBlogFeaturesHead">//Technology</a> --> */}
                  <h4 class='articleTitle'>
                    How to convert A static site with React
                  </h4>
                  <div class='AllBlogFeaturesMainImg'>
                    <img src={news6} alt='' />
                  </div>

                  <article class='postArticle'>
                    <div dangerouslySetInnerHTML={{ __html: mainBlog }} />
                  </article>
                </div>
                {/* <!-- block --> */}
              </div>
            </div>
            {/* <!-- left part -->
                <!-- right part --> */}
            <div class='col-md-4'>
              <div class='rightBlogBodyFeatureMain'>
                <div class='latestPostMain'>
                  <div class='latestPostTitle'>Latest Posts</div>
                  {/* <!-- list --> */}
                  <div class='latestPostList'>
                    <div class='postImg'>
                      <img src='../images/news-6.jpg' alt='' />
                    </div>
                    <div class='postInfo'>
                      <div class='postTile'>
                        <a href='/technology.html'>
                          How to convert A static site with React
                        </a>
                      </div>
                      <div class='postContent'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto, facere?...
                      </div>
                    </div>
                  </div>
                  {/* <!-- list -->
                            <!-- list --> */}
                  <div class='latestPostList'>
                    <div class='postImg'>
                      <img src='../images/news-6.jpg' alt='' />
                    </div>
                    <div class='postInfo'>
                      <div class='postTile'>
                        <a href='/technology.html'>
                          How to convert A static site with React
                        </a>
                      </div>
                      <div class='postContent'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto, facere?...
                      </div>
                    </div>
                  </div>
                  {/* <!-- list -->
                            <!-- list --> */}
                  <div class='latestPostList'>
                    <div class='postImg'>
                      <img src='../images/news-6.jpg' alt='' />
                    </div>
                    <div class='postInfo'>
                      <div class='postTile'>
                        <a href='/technology.html'>
                          How to convert A static site with React
                        </a>
                      </div>
                      <div class='postContent'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto, facere?...
                      </div>
                    </div>
                  </div>
                  {/* <!-- list --> */}
                </div>
              </div>
            </div>
            {/* <!-- right part --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
