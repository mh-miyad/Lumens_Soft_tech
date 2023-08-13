import React from "react";
import "./Blog.css";
import news6 from "../assets/images/news-6.jpg";
import BlogCard from "../Components/BlogCard/BlogCard";
import { useState } from "react";
import { useEffect } from "react";
import useAxios from "../Hooks/useAxios";
import LoadingComp from "../Components/Loading/LoadingComp";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { loading, get } = useAxios();
  const [data, setData] = useState([]);
  useEffect(() => {
    get("/blogList")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, []);
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
                        How to convert A static site with React
                      </h1>
                      <a href='/technology.html' className='blog-btn'>
                        Read Blog
                      </a>
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
      <section className='blogFeatureOne'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='blogFeatureOneMain'>
                <div className='blogFeatureOnebox'>
                  <div className='blogFeatureImg'>
                    <img src={news6} alt='' />
                  </div>
                  <a href='#' className='blogPagesBtn'>
                    Technology
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='blogFeatureOneMain'>
                <div className='blogFeatureOnebox'>
                  <div className='blogFeatureImg'>
                    <img src={news6} alt='' />
                  </div>
                  <a href='#' className='blogPagesBtn'>
                    News
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='blogFeatureOneMain'>
                <div className='blogFeatureOnebox'>
                  <div className='blogFeatureImg'>
                    <img src={news6} alt='' />
                  </div>
                  <a href='/technology.html' className='blogPagesBtn'>
                    Marketing
                  </a>
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='blogFeatureOneMain'>
                <div className='blogFeatureOnebox'>
                  <div className='blogFeatureImg'>
                    <img src={news6} alt='' />
                  </div>
                  <a href='/technology.html' className='blogPagesBtn'>
                    SEO
                  </a>
                </div>
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
                {loading ? (
                  <>
                    <LoadingComp />
                  </>
                ) : (
                  <div className='AllBlogFeaturesMain'>
                    <a href='/technology.html' className='AllBlogFeaturesHead'>
                      //Technology
                    </a>
                    {data.map((ele) => (
                      <BlogCard
                        key={ele._id}
                        _id={ele._id}
                        blogTitle={ele.blogTitle}
                        img={ele.image}
                        shortTitle={ele.shortTitle}
                      />
                    ))}
                  </div>
                )}
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
                  {data?.slice(0, 4).map((ele) => (
                    <Link to={`/blogDetails/${ele._id}`} key={ele._id}>
                      <div className='latestPostList'>
                        <div className='postImg'>
                          <img src={ele.image} alt='' />
                        </div>
                        <div className='postInfo'>
                          <div className='postTile'>
                            <a href='/technology.html'>{ele.blogTitle}</a>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  {/* <!-- list -->
                            <!-- list --> */}
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

export default Blogs;
