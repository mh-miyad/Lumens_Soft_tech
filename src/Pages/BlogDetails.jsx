import React from "react";
import "./Blog.css";

import { useState } from "react";
import { useEffect } from "react";
import useAxios from "../Hooks/useAxios";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { loading, get } = useAxios();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    get(`/blogDetails/?id=${id}`)
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, [data]);
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
                      <h1 class='blog-head'>{data.map((e) => e.blogTitle)}</h1>
                      <p class='blog-btn w-1/2 mx-auto'>
                        Read This Blog Bellow
                      </p>
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
                {data.map((e) => (
                  <div class='AllBlogFeaturesMain'>
                    {/* <!-- <a href="/technology.html" class="AllBlogFeaturesHead">//Technology</a> --> */}
                    <h4 class='articleTitle'>{e?.blogTitle}</h4>
                    <div class='AllBlogFeaturesMainImg'>
                      <img src={e?.image} alt='' />
                    </div>

                    <article class='postArticle'>
                      <div dangerouslySetInnerHTML={{ __html: e?.mainBlog }} />
                    </article>
                  </div>
                ))}
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
