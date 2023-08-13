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
      <section className='bloggerSlide'>
        <div className='blogSlideBox'>
          <div className='blog-carousel owl-theme owl-loaded'>
            <div className='owl-stage-outer blog-stage-outer'>
              <div className='owl-stage blog-owl-stage'>
                {/* <!-- items --> */}
                <div className='owl-item blogSlide-owl-item'>
                  <div className='blog-slider-main'>
                    <div className='blog-slider-img'></div>
                    <div className='blog-slider-img-overlay'></div>
                    <div className='blog-slider-info'>
                      <h1 className='blog-head'>
                        {data.map((e) => e.blogTitle)}
                      </h1>
                      <p className='blog-btn w-1/2 mx-auto'>
                        Read This Blog Bellow
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- items --> */}
              </div>
            </div>
            <div className='owl-nav'>
              <div className='owl-prev'>
                <i className='fa-solid fa-angle-left'></i>
              </div>
              <div className='owl-next'>
                <i className='fa-solid fa-angle-right'></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blogBodyFeatures'>
        <div className='container'>
          <div className='row'>
            {/* <!-- left part --> */}
            <div className='col-md-8'>
              <div className='leftBlogBodyFeatureMain'>
                {/* <!-- block --> */}
                {/* <div className='AllBlogFeaturesMain'>
                  <a href='/technology.html' className='AllBlogFeaturesHead'>
                    //Technology
                  </a>
                </div> */}
                {data.map((e) => (
                  <div className='AllBlogFeaturesMain'>
                    {/* <!-- <a href="/technology.html" className="AllBlogFeaturesHead">//Technology</a> --> */}
                    <h4 className='articleTitle'>{e?.blogTitle}</h4>
                    <div className='AllBlogFeaturesMainImg'>
                      <img src={e?.image} alt='' />
                    </div>

                    <article className='postArticle'>
                      <div dangerouslySetInnerHTML={{ __html: e?.mainBlog }} />
                    </article>
                  </div>
                ))}
                {/* <!-- block --> */}
              </div>
            </div>
            {/* <!-- left part -->
                <!-- right part --> */}
            <div className='col-md-4'>
              <div className='rightBlogBodyFeatureMain'>
                <div className='latestPostMain'>
                  <div className='latestPostTitle'>Latest Posts</div>
                  {/* <!-- list --> */}
                  <div className='latestPostList'>
                    <div className='postImg'>
                      <img src='../images/news-6.jpg' alt='' />
                    </div>
                    <div className='postInfo'>
                      <div className='postTile'>
                        <a href='/technology.html'>
                          How to convert A static site with React
                        </a>
                      </div>
                      <div className='postContent'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto, facere?...
                      </div>
                    </div>
                  </div>
                  {/* <!-- list -->
                            <!-- list --> */}
                  <div className='latestPostList'>
                    <div className='postImg'>
                      <img src='../images/news-6.jpg' alt='' />
                    </div>
                    <div className='postInfo'>
                      <div className='postTile'>
                        <a href='/technology.html'>
                          How to convert A static site with React
                        </a>
                      </div>
                      <div className='postContent'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto, facere?...
                      </div>
                    </div>
                  </div>
                  {/* <!-- list -->
                            <!-- list --> */}
                  <div className='latestPostList'>
                    <div className='postImg'>
                      <img src='../images/news-6.jpg' alt='' />
                    </div>
                    <div className='postInfo'>
                      <div className='postTile'>
                        <a href='/technology.html'>
                          How to convert A static site with React
                        </a>
                      </div>
                      <div className='postContent'>
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
