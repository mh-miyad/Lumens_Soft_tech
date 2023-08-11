import React from "react";
import img1 from "../assets/images/service-web-design.png";
const ServiceDetails = () => {
  return (
    <div>
      <section class='services-all-part-one'>
        <div class='container'>
          <div class='row'>
            <div class='col-lg-12 col-md-12 col-sm-12'>
              <div class='service-one-title-box service-cat-title'>
                <h1 class='text-blue-500 font-bold text-4xl md:text-6xl md:mb-5 lg:text-7xl lg:mb-0'>
                  Our best Services
                </h1>
                <div class='text-white text-lg mt-2 md:text-3xl lg:text-4xl font-bold  md:mt-5'>
                  We provide best IT services.We always follow the best quality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='service-all-part-two'>
        <div class='container'>
          <div class='row'>
            <div class='service-web-design-img col-lg-6 col-md-12 col-sm-12'>
              <div class='service-all-part-left'>
                <img src={img1} alt='' />
              </div>
            </div>
            <div class='service-web-design-con col-lg-6 col-md-12 col-sm-12'>
              <div class='service-all-part-right'>
                <div class='service-all-part-title-box'>
                  <div class='service-all-part-title'>// About Our Service</div>
                  <h2 class='service-all-part-heading'>
                    We Provide Best
                    <br />
                    <span>Web Design</span>
                  </h2>
                </div>
                {/* <!-- details --> */}
                <div class='row'>
                  {/* <!-- block --> */}
                  <div class='col-lg-6 col-md-12 col-sm-12'>
                    <div class='service-all-details-box'>
                      <span>01</span>
                      <div class='service-all-detail-title'>
                        HTML 5 development
                      </div>
                      <div class='service-all-detail-text'>
                        We’re committed to building sustainable and high-quality
                        HTML solutions.
                      </div>
                    </div>
                  </div>
                  {/* <!-- block -->
                            <!-- block --> */}
                  <div class='col-lg-6 col-md-12 col-sm-12'>
                    <div class='service-all-details-box'>
                      <span>02</span>
                      <div class='service-all-detail-title'>
                        CSS 5 development
                      </div>
                      <div class='service-all-detail-text'>
                        We’re committed to building sustainable and high-quality
                        CSS solutions.
                      </div>
                    </div>
                  </div>
                  {/* <!-- block -->
                            <!-- block --> */}
                  <div class='col-lg-6 col-md-12 col-sm-12'>
                    <div class='service-all-details-box'>
                      <span>03</span>
                      <div class='service-all-detail-title'>
                        JavaScript development
                      </div>
                      <div class='service-all-detail-text'>
                        We’re committed to building sustainable and high-quality
                        JavaScript solutions.
                      </div>
                    </div>
                  </div>
                  {/* <!-- block -->
                            <!-- block --> */}
                  <div class='col-lg-6 col-md-12 col-sm-12'>
                    <div class='service-all-details-box'>
                      <span>04</span>
                      <div class='service-all-detail-title'>
                        Next.js development
                      </div>
                      <div class='service-all-detail-text'>
                        We’re committed to building sustainable and high-quality
                        Next.js solutions.
                      </div>
                    </div>
                  </div>
                  {/* <!-- block --> */}
                </div>
                {/* <!-- details --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='service-advantage'>
        <div class='container'>
          <div class='row'>
            {/* <!-- block --> */}
            <div class='col-lg-4 col-md-12 col-sm-12'>
              <div class='service-advan-box'>
                <div class='serv-adv-icon'>
                  <img src='../images/verify.svg' alt='' />
                </div>
                <div class='content-box'>
                  <h4>Unique Design</h4>
                  <p>Support and Evolution</p>
                </div>
                <span>01</span>
              </div>
            </div>
            {/* <!-- block -->
                <!-- block --> */}
            <div class='col-lg-4 col-md-12 col-sm-12'>
              <div class='service-advan-box active'>
                <div class='serv-adv-icon'>
                  <img src='../images/verify02.svg' alt='' />
                </div>
                <div class='content-box'>
                  <h4>Fully responsive</h4>
                  <p>Support and Evolution</p>
                </div>
                <span>02</span>
              </div>
            </div>
            {/* <!-- block -->
                <!-- block --> */}
            <div class='col-lg-4 col-md-12 col-sm-12'>
              <div class='service-advan-box'>
                <div class='serv-adv-icon'>
                  <img src='../images/verify03.svg' alt='' />
                </div>
                <div class='content-box'>
                  <h4>Advance Technology</h4>
                  <p>Support and Evolution</p>
                </div>
                <span>03</span>
              </div>
            </div>
            {/* <!-- block --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
