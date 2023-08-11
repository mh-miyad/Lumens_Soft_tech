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
                    Introduction: Explain what a static site is and why you
                    might want to convert it to a React site. You can mention
                    some of the benefits of using React, such as improved
                    performance, interactivity, and scalability. You can also
                    briefly introduce the tools and steps you will use in this
                    tutorial. Prerequisites: List the requirements for following
                    this tutorial, such as having Node.js, npm, and React
                    installed on your machine. You can also provide links to the
                    official documentation for these tools .
                  </article>
                  <article class='postArticle'>
                    {" "}
                    Step 1: Create a React app using create-react-app. Show how
                    to use the command-line tool to generate a basic React app
                    with the name of your choice. You can also explain the
                    structure and files of the generated app.
                  </article>
                  <article class='postArticle'>
                    Step 2: Copy your static site files into the public folder
                    of your React app. Explain that this folder is where you can
                    put any static assets that you want to serve with your React
                    app, such as HTML, CSS, images, etc. You can also show how
                    to modify the index.html file to include the root element
                    where your React app will be rendered.
                  </article>
                  <div class='AllBlogFeaturesMainImg'>
                    <img src='../images/news-5.jpg' alt='' />
                  </div>
                  <article class='postArticle'>
                    {" "}
                    Step 3: Convert your static HTML pages into React
                    components. Show how to use JSX syntax to write HTML
                    elements inside JavaScript files. You can also explain how
                    to import and export components, use props and state, and
                    add event handlers and lifecycle methods. You can use some
                    examples from your static site to demonstrate these
                    concepts.
                  </article>
                  <article class='postArticle'>
                    {" "}
                    Step 4: Add routing to your React app using
                    react-router-dom. Explain what routing is and why it is
                    important for creating a single-page application with React.
                    Show how to install and import react-router-dom, use
                    BrowserRouter, Switch, Route, and Link components, and
                    create dynamic routes with parameters and query strings. You
                    can also show how to handle 404 errors and redirects.
                  </article>
                  <div class='AllBlogFeaturesMainImg'>
                    <img src='../images/news-4.jpg' alt='' />
                  </div>
                  <article class='postArticle'>
                    Step 5: Build and deploy your React app. Explain how to use
                    the npm scripts to build your React app for production and
                    optimize it for performance. You can also show how to deploy
                    your app to a hosting service of your choice, such as
                    Netlify, Vercel, or GitHub Pages. You can also provide links
                    to the documentation for these services.
                  </article>
                  <article class='postArticle'>
                    {" "}
                    Conclusion: Summarize what you have learned and achieved in
                    this tutorial. You can also provide some suggestions for
                    further improvements or extensions of your React app, such
                    as adding styling
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
