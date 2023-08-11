import React from "react";
import logo from "../../assets/images/logo (2).svg";
import FooterBanner from "../FooterBanner/FooterBanner";

const Footer = () => {
  return (
    <div className='mb-0'>
      <FooterBanner />
      <footer className='footer -z-10'>
        <div className='footer bg'></div>
        <div className='max-w-6xl mx-auto px-20 md:px-16 '>
          {/* <!-- widget --> */}
          <div className='f-widget-box '>
            <div className='row'>
              {/* <!-- big col --> */}
              <div className='col-md-6 col-lg-6 col-sm-6 f-big-col'>
                <div className='row'>
                  {/* <!-- footer col --> */}
                  <div className='col-md-6 f-col'>
                    <div className='f-w-col f-logo-w'>
                      <div className='f-logo'>
                        <a href='#'>
                          <img src={logo} alt='' />
                        </a>
                      </div>
                      <div className='f-text'>
                        We work with a passion of taking challenges and creating
                        new ones in advertising sector.
                      </div>
                      <div className='f-w-social-box'>
                        <ul className='f-w-social'>
                          <li className='f-w-s-li'>
                            <a href='#'>
                              <i className='fa-brands fa-facebook-f'></i>
                            </a>
                          </li>
                          <li className='f-w-s-li'>
                            <a href='#'>
                              <i className='fa-brands fa-twitter'></i>
                            </a>
                          </li>
                          <li className='f-w-s-li'>
                            <a href='#'>
                              <i className='fa-brands fa-pinterest-p'></i>
                            </a>
                          </li>
                          <li className='f-w-s-li'>
                            <a href='#'>
                              <i className='fa-brands fa-linkedin-in'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- footer col --> */}
                  <div className='col-md-6 f-col'>
                    <div className='line-drop'></div>
                    <div className='f-w-col f-services-w'>
                      <h4>Quick Link</h4>
                      <div className='f-s-w-box'>
                        <ul className='f-w-ul'>
                          <li className='f-w-li'>
                            <a href='#'>
                              <i className='fa-regular fa-circle-dot'></i>Web
                              design
                            </a>
                          </li>
                          <li className='f-w-li'>
                            <a href='#'>
                              <i className='fa-regular fa-circle-dot'></i>Web
                              development
                            </a>
                          </li>
                          <li className='f-w-li'>
                            <a href='#'>
                              <i className='fa-regular fa-circle-dot'></i>
                              Software development
                            </a>
                          </li>
                          <li className='f-w-li'>
                            <a href='#'>
                              <i className='fa-regular fa-circle-dot'></i>
                              Digital marketing
                            </a>
                          </li>
                          <li className='f-w-li'>
                            <a href='#'>
                              <i className='fa-regular fa-circle-dot'></i>
                              graphic Design{" "}
                            </a>
                          </li>
                          <li className='f-w-li'>
                            <a href='#'>
                              <i className='fa-regular fa-circle-dot'></i>
                              Content writing{" "}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- footer col --> */}
                </div>
              </div>
              {/* <!-- big col --> */}
              <div className='col-md-6 col-lg-6 col-sm-6 f-big-col'>
                <div className='row'>
                  {/* <!-- footer col --> */}
                  <div className='col-md-6 f-col'>
                    <div className='line-drop'></div>
                    <div className='f-w-col f-w-cont'>
                      <h4>Get In Touch</h4>
                      <div className='f-w-cont-list'>
                        <ul className='f-w-c-list-ul'>
                          <li className='f-w-c-list-li'>
                            <a href='tel:+8801829317005'>
                              <i className='fa-solid fa-phone'></i>
                              +8801676-347987
                            </a>
                          </li>
                          <li className='f-w-c-list-li'>
                            <a href='mail:info@specdigitech.com'>
                              <i className='fa-solid fa-envelope'></i>
                              info@lumensofttech.com
                            </a>
                          </li>
                          <li className='f-w-c-list-li'>
                            <i className='fa-solid fa-location-dot'></i>331,
                            elephant road (1st floor), 1205
                          </li>
                        </ul>
                      </div>
                      <h4>Newsletter</h4>
                      <div className='f-w-newsletter'>
                        <div className='f-w-newsletter-text'>
                          Subscribe our newsletter to get our latest update &
                          news
                        </div>
                        <div className='form-group'>
                          <form method='post' action='contact.html'>
                            <input
                              type='email'
                              name='email'
                              id='email'
                              placeholder='Your Email Address'
                              required
                            />
                            <button type='submit' className='btn'>
                              <i className='fa-solid fa-paper-plane'></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- footer col --> */}
                  <div className='col-md-6 f-col'>
                    <div className='line-drop'></div>
                    <div className='f-w-col f-w-map'>
                      <h4>Our Location</h4>
                      <div className='footer-map'>
                        <iframe
                          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.46484289267!2d90.3944183512202!3d23.77887575841229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1685890906769!5m2!1sen!2sbd'
                          //   style={'border:0;'}
                          className='border-2 border-white '
                          allowfullscreen=''
                          loading='lazy'
                          referrerpolicy='no-referrer-when-downgrade'></iframe>
                      </div>
                    </div>
                  </div>
                  {/* <!-- footer col --> */}
                </div>
              </div>

              {/* <!-- big col --> */}
            </div>
          </div>
          {/* <!-- widget --> */}
          <div className='footer-bottom'>
            <div className='row'>
              <div className='col-md-12 col-lg-12 col-sm-12'>
                <div className='copy-right-sect'>
                  <p>2023 © All rights reserved by </p>
                  <a href='#'>Lumen SoftTech</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
