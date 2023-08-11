import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const SliderComp = () => {
  return (
    <section className='main-slider'>
      <div className='slider-box'>
        <div className='slider-owl-carousel owl-carousel owl-theme owl-loaded '>
          <div className='owl-stage-outer slider-owl-stage-outer'>
            <div className='owl-stage  slider-owl-stage'>
              {/* blocks */}
              <div className='owl-item slider-owl-item'>
                <div className='slide'>
                  <div className='slider-image-layer'></div>
                  <div className='slider-pattern-layer'></div>
                  <div className='max-w-6xl mx-auto px-20 '>
                    {/* content column */}
                    <div className='slider-content'>
                      <div className='slider-con-inner'>
                        <div className='slider-title'>
                          We are Business Solution
                        </div>
                        <h1 className='slider-heading'>
                          Prosper in this volatile <br /> market funding.
                        </h1>
                        <div className='slider-text'>
                          We place you at the centre of international networks
                          to <br /> advance your strategic interests
                        </div>
                        {/* slider button */}
                        {/* <div className="slider-btn-box">
                          <a href="#" className="btn"><span>Hire Us</span></a>
                        </div> */}
                      </div>
                    </div>
                    {/* content column */}
                  </div>
                </div>
              </div>
              {/* blocks */}
              {/* blocks */}
              <div className='owl-item slider-owl-item'>
                <div className='slide'>
                  <div className='slider-image-layer-two'></div>
                  <div className='slider-pattern-layer'></div>
                  <div className='max-w-6xl mx-auto px-20'>
                    {/* content column */}
                    <div className='slider-content'>
                      <div className='slider-con-inner'>
                        <div className='slider-title'>
                          We are Business Solution
                        </div>
                        <h1 className='slider-heading'>
                          Prosper in this volatile <br /> market funding.
                        </h1>
                        <div className='slider-text'>
                          We place you at the centre of international networks
                          to <br /> advance your strategic interests
                        </div>
                        {/* slider button */}
                        {/* <div className="slider-btn-box">
                          <a href="#" className="btn"><span>Hire Us</span></a>
                        </div> */}
                      </div>
                    </div>
                    {/* content column */}
                  </div>
                </div>
              </div>
              {/* blocks */}
              {/* blocks */}
              <div className='owl-item slider-owl-item'>
                <div className='slide'>
                  <div className='slider-image-layer-three'></div>
                  <div className='slider-pattern-layer'></div>
                  <div className='max-w-6xl mx-auto px-20 '>
                    {/* content column */}
                    <div className='slider-content'>
                      <div className='slider-con-inner'>
                        <div className='slider-title'>
                          We are Business Solution
                        </div>
                        <h1 className='slider-heading'>
                          Prosper in this volatile <br /> market funding.
                        </h1>
                        <div className='slider-text'>
                          We place you at the centre of international networks
                          to <br /> advance your strategic interests
                        </div>
                        {/* slider button */}
                        {/* <div className="slider-btn-box">
                          <a href="#" className="btn"><span>Hire Us</span></a>
                        </div> */}
                      </div>
                    </div>
                    {/* content column */}
                  </div>
                </div>
              </div>
              {/* blocks */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderComp;
