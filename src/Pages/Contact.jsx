import React from "react";
import img from "../assets/images/contact.svg";
import img1 from "../assets/images/con-icon-01.svg";
import img2 from "../assets/images/con-icon-02.svg";
import img3 from "../assets/images/con-icon-03.svg";
import { Helmet } from "react-helmet";
import ContactForm from "../Components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className=''>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Contact US-Lumens Soft tech</title>
      </Helmet>
      <section className='con-fisrt-sect'>
        <div className='container '>
          <div className='row'>
            <div className=' about-page-f-img col-lg-6 col-md-12 col-sm-12 '>
              <div className='contact-icon-img'>
                <img src={img} alt='' />
              </div>
            </div>
            <div className=' about-page-f-con col-lg-6 col-md-12 col-sm-12'>
              <div className='contact-main'>
                <h2 className='contact-title'>Contact us</h2>
                <div className='contact-p'>
                  We are waiting for your notifications!
                </div>
                <ul className='contact-details'>
                  <li>
                    <i className='fa-solid fa-headset'></i> 24/7 support
                  </li>
                  <li>
                    <i className='fa-solid fa-headset'></i> fast response
                  </li>
                  <li>
                    <i className='fa-solid fa-headset'></i> best communicative
                    support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='contact-one max-w-6xl mx-auto'>
        <div className='con-one-bg'></div>
        <div className='container '>
          <div className='contact-title-box'>
            <div className='d-flex justify-content-between align-items-center flex-wrap'>
              <div className='con-left'>
                <div className='con-sect-title'>Contact Us</div>
                <h1 className='con-sect-heading'>
                  Grow Your Business With
                  <br />
                  <span>Our Expertise</span>
                </h1>
              </div>
              <div className='con-right'>
                <div className='con-title-text'>
                  The perfect blend of mature processes, flexible delivery
                  <br />
                  models, effective project management.
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row --> */}
          <div className='row'>
            <div className='info-column col-lg-4 col-md-12 col-md-12'>
              <div className='inner-column'>
                {/* <!-- block --> */}
                <div className='contact-block'>
                  <div className='block-inner'>
                    <div className='con-icon'>
                      <img src={img1} alt='' />
                    </div>
                    <h4>Office address</h4>
                    <div className='block-inner-text'>
                      Digital Agency Network 20 Eastbourne Terrace London W2 6LG
                    </div>
                  </div>
                </div>
                {/* <!-- block -->
                        <!-- block --> */}
                <div className='contact-block'>
                  <div className='block-inner'>
                    <div className='con-icon'>
                      <img src={img2} alt='' />
                    </div>
                    <h4>Telephone number</h4>
                    <div className='block-inner-text'>
                      +880-1829317005
                      <br />
                      +880-1829317005
                    </div>
                  </div>
                </div>
                {/* <!-- block -->
                        <!-- block --> */}
                <div className='contact-block'>
                  <div className='block-inner'>
                    <div className='con-icon'>
                      <img src={img3} alt='' />
                    </div>
                    <h4>Mail address</h4>
                    <div className='block-inner-text'>
                      help@envato.com
                      <br />
                      help@support.com
                    </div>
                  </div>
                </div>
                {/* <!-- block --> */}
                <div className='g-map'>
                  <div className='block-inner'>
                    <div className='map-area'>
                      <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.46484289267!2d90.3944183512202!3d23.77887575841229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1684997647313!5m2!1sen!2sbd'
                        allowfullscreen=''
                        loading='lazy'
                        referrerpolicy='no-referrer-when-downgrade'></iframe>
                    </div>
                  </div>
                </div>
                {/* <!-- block --> */}
              </div>
            </div>
            <div className='form-column col-lg-8 col-md-12 col-md-12'>
              <div className='inner-column'>
                {/* <!-- contact form --> */}
                <div className='form-container '>
                  <ContactForm />
                </div>
                {/* <!-- contact form --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
