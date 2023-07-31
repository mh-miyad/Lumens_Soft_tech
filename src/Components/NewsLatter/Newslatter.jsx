import React from "react";
import img from "../../assets/images/feature.png";
import "./Newslatter.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Newslatter = () => {
  return (
    <div>
      <section className='feature-one'>
        <div className='feature-one-bg'></div>
        <div className='feat-pattern-layer-one'></div>
        <div className='feat-pattern-layer-two'></div>
        <div className='max-w-6xl mx-auto  px-16 '>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
            <div className='feat-one-img   '>
              <div className='feature-one-img'>
                <span className='feature-one-img-box'>
                  <img src={img} alt='' />
                </span>
              </div>
            </div>
            <div className='feat-one-con '>
              <div className='feature-one-title'>
                <h2 className='feature-one-h2'>
                  We Design For Preferred Futures
                </h2>
                <h5 className='feature-one-h5'>
                  Our services extend to every aspect of the project development
                  process
                </h5>
              </div>
              <div className='feature-one-list'>
                <div className='feature-one-list-box'>
                  <span className='feature-one-icon'>
                    <i className='fa-solid fa-circle-check'></i>
                  </span>
                  <h5 className='feat-one-list-item'>
                    We immerse ourselves in the analytics of your business, in
                    order to study all the subtleties and determine target
                  </h5>
                </div>
                <div className='feature-one-list-box'>
                  <span className='feature-one-icon'>
                    <i className='fa-solid fa-circle-check'></i>
                  </span>
                  <h5 className='feat-one-list-item'>
                    We immerse ourselves in the analytics of your business, in
                    order to study all the subtleties and determine target
                  </h5>
                </div>
                <div className='feature-one-list-box'>
                  <span className='feature-one-icon'>
                    <i className='fa-solid fa-circle-check'></i>
                  </span>
                  <h5 className='feat-one-list-item'>
                    We immerse ourselves in the analytics of your business, in
                    order to study all the subtleties and determine target
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newslatter;
