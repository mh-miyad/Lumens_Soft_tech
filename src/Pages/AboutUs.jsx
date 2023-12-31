import React, { useEffect, useState } from "react";
import "../Css/About.css";
import img from "../assets/images/about.svg";
import img2 from "../assets/images/pattern-45.png";
import img3 from "../assets/images/about-4.jpg";
import img4 from "../assets/images/award.svg";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import useAxios from "../Hooks/useAxios";
import CountUp from "react-countup";

AOS.init();
const AboutUs = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab-btn");
    const tabContent = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", (e) => {
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });

        tab.classList.add("active");
        var line = document.querySelector(".line");
        line.style.width = e.target.offsetWidth + "px;";
        line.style.left = e.target.offsetLeft + "px";
        tabContent.forEach((content) => {
          content.classList.remove("active");
        });
        tabContent[index].classList.add("active");
      });
    });
  }, []);
  const { loading, get } = useAxios();
  const [data, setData] = useState([]);
  useEffect(() => {
    get("/aboutList")
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, [data]);
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>About Us Page-Lumens Soft tech</title>
      </Helmet>
      {/* <!-- about 1st part --> */}
      <section className='about-first'>
        <div className='max-w-6xl mx-auto   px-5'>
          <div className='row'>
            <div className='abour-first-img col-lg-6 col-md-6 col-sm-12 '>
              <div className='about-icon-img'>
                <img src={img} alt='' />
              </div>
            </div>
            <div className='abour-first-title col-lg-6 col-md-6 col-sm-12 '>
              <div className='about-main'>
                <h1 className='about-title'>About Our Company</h1>
                <div className='about-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati eius atque tempora!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about 1st end -->
    <!-- about 2nd part --> */}
      <section className='about-one-part' id='about-counter'>
        <div className='max-w-6xl mx-auto px-10'>
          <div className='row'>
            {/* <!-- left part --> */}
            <div className='about-one-content col-lg-6 col-md-12 col-sm-12'>
              <div className='about-cont-inner'>
                <div className='about-one-sec-title'>
                  <div className='about-us-title'>//about us</div>
                  <h1 className='about-us-heading'>
                    Choose <span>The Best IT</span>
                    <br />
                    Service Company
                  </h1>
                  <div className='about-us-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do tempo rincididunt ut labore et dolore magna.
                  </div>
                </div>
                {/* <!-- about tabs --> */}
                <div className='about-info-tabs'>
                  <div className='about-info-tab-box'>
                    <button className='tab-btn -mt-5 sm:mt-0   active'>
                      Our Mession
                    </button>
                    <button className='tab-btn -mt-5  sm:mt-0 '>
                      Our vision
                    </button>
                    <button className='tab-btn -mt-5  sm:mt-0 '>
                      Our value
                    </button>
                    <div className='line'></div>
                  </div>
                  <div className='tab-content-box'>
                    {/* <!-- block --> */}
                    <div className='tab-content active'>
                      <h3 className='my-2'>Our Mession</h3>
                      <p>{data?.map((ele) => ele.ourMission)}</p>
                    </div>
                    {/* <!-- block -->
                                <!-- block --> */}
                    <div className='tab-content'>
                      <h3>Our vision</h3>
                      <p>{data?.map((ele) => ele.ourVision)}</p>
                    </div>
                    {/* <!-- block -->
                                <!-- block --> */}
                    <div className='tab-content'>
                      <h3>Our value</h3>
                      <p>{data?.map((ele) => ele.ourValue)}</p>
                    </div>
                    {/* <!-- block --> */}
                  </div>
                </div>
                {/* <!-- about tabs --> */}
              </div>
            </div>
            {/* <!-- left part -->
                <!-- right part --> */}
            <div className='about-one-img-column col-lg-6 col-md-12 col-sm-12 mb-20 px-10'>
              <div className='about-one-img-inner'>
                <div className='about-circle-img'>
                  <img src={img2} alt='' />
                </div>
                <div className='about-one-right-img'>
                  {/* <!-- counter column  --> */}
                  <div className='about-one-counter-block'>
                    <div className='layer-dots'></div>
                    <div className='about-counter-box'>
                      <div className='count'>
                        <CountUp end={12} duration={20} />
                      </div>
                    </div>
                    <div className='counter-text'>years of experiences</div>
                  </div>
                  {/* <!-- counter column  --> */}
                  <div className='about-inner-img'>
                    <img src={img3} alt='' />
                  </div>
                  <div className='about-one-award'>
                    <div className='award-inner'>
                      <div className='about-award-icon'>
                        <img src={img4} alt='' />
                      </div>
                      <h4>Best Awarded Company</h4>
                      <p>
                        We adapt our delivery to the way your work, whether as
                        an external provider.
                      </p>
                    </div>
                  </div>
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

export default AboutUs;
