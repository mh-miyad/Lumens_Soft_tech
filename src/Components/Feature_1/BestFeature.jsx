import React from "react";
import "./style.css";

const BestFeature = () => {
  return (
    <section className='feature-two'>
      <div className='max-w-6xl mx-auto px-10 '>
        <div className='feat-two-title'>
          <p className=' text-indigo-600 font-bold'>//our best features</p>
          <div className='text-gray-400  '>
            We help create succsessfull digital products, for any screenand for
            <br />
            ever imagenably user and many iteresting things for us
          </div>
        </div>
        <div className='row'>
          {/* <!-- feature card  --> */}
          <div className='col-md-4 col-lg-4 col-sm-6'>
            <div className='feat-card rounded-xl '>
              <div className='feat-card-head'>
                <div className='feat-card-i'>
                  <i className='fa-solid fa-arrow-up-right-dots'></i>
                </div>
                <div className='feat-card-round-border'>
                  <span className='feat-circle'></span>
                </div>
              </div>
              <div className='feat-card-body'>
                <h3>Web Design</h3>
                <p>
                  If you need branding, we will create a consistent visual
                  identification of your service.
                </p>
                <a className='btn' href='#'>
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- feature card  -->
                <!-- feature card  --> */}
          <div className='col-md-4 col-lg-4 col-sm-6'>
            <div className='feat-card rounded-xl'>
              <div className='feat-card-head'>
                <div className='feat-card-i'>
                  <i className='fa-solid fa-code'></i>
                </div>
                <div className='feat-card-round-border'>
                  <span className='feat-circle'></span>
                </div>
              </div>
              <div className='feat-card-body'>
                <h3>Web development</h3>
                <p>
                  If you need branding, we will create a consistent visual
                  identification of your service.
                </p>
                <a className='btn' href='#'>
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- feature card  -->
                <!-- feature card  --> */}
          <div className='col-md-4 col-lg-4 col-sm-6'>
            <div className='feat-card rounded-xl'>
              <div className='feat-card-head'>
                <div className='feat-card-i'>
                  <i className='fa-brands fa-connectdevelop'></i>
                </div>
                <div className='feat-card-round-border'>
                  <span className='feat-circle'></span>
                </div>
              </div>
              <div className='feat-card-body'>
                <h3>digital marketing</h3>
                <p>
                  If you need branding, we will create a consistent visual
                  identification of your service.
                </p>
                <a className='btn' href='#'>
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- feature card  --> */}
        </div>
      </div>
    </section>
  );
};

export default BestFeature;
