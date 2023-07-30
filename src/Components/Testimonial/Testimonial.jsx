import React from "react";
import img from "../../assets/images/client.png";
const Testimonial = () => {
  return (
    <div>
      <section className='testimonial'>
        <div className='test-pattern'></div>
        <div className='test-bg'></div>
        <div className='max-w-6xl mx-auto px-16  '>
          {/* <!-- title --> */}
          <div className='test-title'>
            <h5 className='client-test'>
              <span>//</span>Client Testimonials
            </h5>
            <h2 className='client-test-two'>
              What They’re <span>Talking?</span>
            </h2>
          </div>
          {/* <!-- title --> */}
          <div className='test-one-main'>
            {/* <!-- owl carousel --> */}
            <div className='test-owl owl-carousel owl-theme owl-loaded'>
              {/* <!-- owl carousel --> */}
              <div className='owl-stage-outer test-owl-stage-outer'>
                <div className='owl-stage test-owl-stage'>
                  {/* <!-- test item block --> */}
                  <div className='owl-item test-owl-item'>
                    <div className='testimonial-block'>
                      <div className='test-inner-box'>
                        <div className='test-rating'>
                          <i className='fa-solid fa-star'></i>
                          <i className='fa-solid fa-star'></i>
                          <i className='fa-solid fa-star'></i>
                          <i className='fa-solid fa-star'></i>
                          <i className='fa-solid fa-star'></i>
                        </div>
                        <div className='test-text'>
                          “I To helped the client achieve their goal of calling
                          the attention of mobile network operators. The expert
                          team was also able to develop an app with commendable
                          UI/UX. The client appreciates their flexibility in
                          terms.”
                        </div>
                      </div>
                      <div className='test-author-box'>
                        <div className='test-a-box'>
                          <span className='test-author-img'>
                            <img src={img} alt='' />
                          </span>
                          <h5>Azmir Abdulla</h5>
                          <p className='designation'>Senior Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='owl-item test-owl-item'>
                    <div className='testimonial-block'>
                      <div className='test-inner-box'>
                        <div className='test-rating'>
                          <i className='fa-solid fa-star'></i>
                          <i className='fa-solid fa-star'></i>
                          <i className='fa-solid fa-star'></i>
                          <i className='fa-solid fa-star'></i>
                          <i className='fa-solid fa-star'></i>
                        </div>
                        <div className='test-text'>
                          “I To helped the client achieve their goal of calling
                          the attention of mobile network operators. The expert
                          team was also able to develop an app with commendable
                          UI/UX. The client appreciates their flexibility in
                          terms.”
                        </div>
                      </div>
                      <div className='test-author-box'>
                        <div className='test-a-box'>
                          <span className='test-author-img'>
                            <img src={img} alt='' />
                          </span>
                          <h5>Azmir Abdulla</h5>
                          <p className='designation'>Senior Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- test item block --> */}

                  {/* <!-- test item block -->
                            <!-- test item block --> */}

                  {/* <!-- test item block --> */}
                </div>
              </div>
              {/* <!-- owl carousel --> */}
            </div>
            {/* <!-- owl carousel --> */}
          </div>
        </div>
      </section>
      <section className='test-two'>
        <div className='test-two-bg-01'></div>
        <div className='test-two-bg-02'></div>
        <div className='max-w-6xl mx-auto px-16 '>
          <div className='row'>
            <div className='col-md-12 col-sm-12'>
              <div className='test-two-main'>
                <div className='test-two-owl-carousel owl-carousel owl-theme owl-loaded'>
                  <div className='owl-stage-outer'>
                    <div className='owl-stage test-two-owl-stage'>
                      <div className='owl-item test-two-items'>
                        {/*  start here  */}
                        <div className='test-two-info-box'>
                          <div className='test-two-info'>
                            <i className='fa-solid fa-quote-left'></i>
                            <div className='test-two-info-text'>
                              Ordered my first mobile app development to iCoderz
                              Solutions. I was inexperienced contractor but they
                              carefully listened to my request and try to
                              deliver the best quality of service.
                            </div>
                            <h5 className='test-two-author'>Azmir Abdulla</h5>
                            <p className='test-two-author-comp'>
                              Azmir Abdulla
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* end here  */}
                    </div>
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

export default Testimonial;
