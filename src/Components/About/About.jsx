import React from "react";
import "./About.css";
import aboutImg from "../../assets/images/about-2.jpg";
import aboutImg1 from "../../assets/images/about-1.png";
import aboutImg2 from "../../assets/images/about-2.png";
const About = () => {
  return (
    <div className='my-20'>
      <section className='about-one '>
        <div className='about-one-pattern-one '></div>
        <div className='max-w-6xl mx-auto px-10 md:px-20 '>
          <div className='row'>
            <div className='about-one-img-box col-md-6 col-lg-6 col-sm-12'>
              <div className='about-one-pattern-two '></div>
              <div className='about-one-img'>
                <img
                  src={aboutImg}
                  alt=''
                  className='lg:left-24 xl:left-48 shadow-2xl shadow-indigo-500/60'
                />
              </div>
            </div>
            <div className='about-one-con-box col-md-6 col-lg-6 col-sm-12'>
              <div className='about-one-con'>
                <div className='about-one-title'>//About Our Company</div>
                <h1>
                  Choose <span>The Best</span> IT <br /> Service Company
                </h1>
                <p>
                  An IT firm or MSP who keeps your IT running smoothly at all
                  times is like a plumber who fixes your pipes; that’s what they
                  are supposed to do. Many IT firms struggle.
                </p>
              </div>
              <div className='about-one-block-tow'>
                <div className='row'>
                  <div className='about-one-icon-box col-lg-6 col-md-6 col-sm-6'>
                    <div className='about-one-icon-box-inner'>
                      <div className='about-one-icon'>
                        <span className='about-one-icon-img'>
                          <img src={aboutImg1} alt='' />
                        </span>
                        <h6>
                          Moneyback <br /> Gurentee
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className='about-one-icon-box col-lg-6 col-md-6 col-sm-6'>
                    <div className='about-one-icon-box-inner'>
                      <div className='about-one-icon'>
                        <span className='about-one-icon-img'>
                          <img src={aboutImg2} alt='' />
                        </span>
                        <h6>
                          Moneyback <br /> Gurentee
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- contact details --> */}

              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='about-con-box'>
                    <a href='#' className='btn'>
                      <span>
                        contact Us <i className='fa-solid fa-arrow-right'></i>
                      </span>
                    </a>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6'>
                  <div className='about-phone-box'>
                    <span className='about-phone-icon'>
                      <i className='fa-solid fa-phone'></i>
                    </span>
                    <p>Call for help</p>
                    <a className='about-phone-number' href='+880-1829317005'>
                      +880-1829317005
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
