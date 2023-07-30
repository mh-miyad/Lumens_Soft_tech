import React from "react";

const FooterBanner = () => {
  return (
    <section className='footer-head '>
      <div className='max-w-6xl mx-auto  '>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='f-h-bg' data-aos='fade-up' data-aos-duration='1500'>
              <div className='row items-center'>
                <div className='col-md-8 col-sm-8 f-h-left'>
                  <h3 className='f-h-heading'>
                    Looking for the Best IT Business Solutions?
                  </h3>
                  <p className='f-h-text'>
                    As a app web crawler expert, We will help to organize.
                  </p>
                </div>
                <div className='col-md-4 col-sm-4 f-h-right text-center'>
                  <a
                    className='px-10 py-3 bg-indigo-500 text-white rounded-xl  shadow-lg shadow-blue-800 '
                    href='#'>
                    <span className='text-center'>get a quote</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
