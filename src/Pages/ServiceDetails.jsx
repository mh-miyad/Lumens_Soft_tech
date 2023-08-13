import React from "react";
import img1 from "../assets/images/service-web-design.png";
import { useState } from "react";
import useAxios from "../Hooks/useAxios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const ServiceDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { loading, get } = useAxios();

  useEffect(() => {
    get(`/servicesDetails/?id=${id}`)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, []);

  return (
    <div>
      <section className='services-all-part-one'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='service-one-title-box service-cat-title'>
                <h1 className='text-blue-500 font-bold text-4xl md:text-6xl md:mb-5 lg:text-7xl lg:mb-0'>
                  Our best Services
                </h1>
                <div className='text-white text-lg mt-2 md:text-3xl lg:text-4xl font-bold  md:mt-5'>
                  We provide best IT services.We always follow the best quality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='service-all-part-two'>
        <div className='container'>
          <div className='row'>
            <div className='service-web-design-img col-lg-6 col-md-12 col-sm-12'>
              <div className='service-all-part-left'>
                <img src={img1} alt='' />
              </div>
            </div>
            {data.map((e) => (
              <div className='service-web-design-con col-lg-6 col-md-12 col-sm-12'>
                <div className='service-all-part-right'>
                  <div className='service-all-part-title-box'>
                    <div className='service-all-part-title'>
                      // About Our Service
                    </div>
                    <h2 className='service-all-part-heading'>
                      We Provide Best
                      <br />
                      <span>{e?.title}</span>
                    </h2>
                  </div>
                  {/* <!-- details --> */}
                  <div className='row'>
                    {/* <!-- block --> */}
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                      <div className='service-all-details-box'>
                        <span>01</span>
                        <div className='service-all-detail-title'>
                          {e?.short1}
                        </div>
                        <div className='service-all-detail-text'>{e?.des1}</div>
                      </div>
                    </div>
                    {/* <!-- block -->
                            <!-- block --> */}
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                      <div className='service-all-details-box'>
                        <span>02</span>
                        <div className='service-all-detail-title'>
                          {e?.short2}
                        </div>
                        <div className='service-all-detail-text'>{e?.des2}</div>
                      </div>
                    </div>
                    {/* <!-- block -->
                            <!-- block --> */}
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                      <div className='service-all-details-box'>
                        <span>03</span>
                        <div className='service-all-detail-title'>
                          {e?.short3}
                        </div>
                        <div className='service-all-detail-text'>{e?.des3}</div>
                      </div>
                    </div>
                    {/* <!-- block -->
                            <!-- block --> */}
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                      <div className='service-all-details-box'>
                        <span>04</span>
                        <div className='service-all-detail-title'>
                          {e?.short4}
                        </div>
                        <div className='service-all-detail-text'>{e?.des4}</div>
                      </div>
                    </div>
                    {/* <!-- block --> */}
                  </div>
                  {/* <!-- details --> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='service-advantage'>
        <div className='container'>
          <div className='row'>
            {/* <!-- block --> */}
            <div className='col-lg-4 col-md-12 col-sm-12'>
              <div className='service-advan-box'>
                <div className='serv-adv-icon'>
                  <img src='../images/verify.svg' alt='' />
                </div>
                <div className='content-box'>
                  <h4>{data?.map((e) => e?.head1)}</h4>
                  <p>Support and Evolution</p>
                </div>
                <span>01</span>
              </div>
            </div>
            {/* <!-- block -->
                <!-- block --> */}
            <div className='col-lg-4 col-md-12 col-sm-12'>
              <div className='service-advan-box active'>
                <div className='serv-adv-icon'>
                  <img src='../images/verify02.svg' alt='' />
                </div>
                <div className='content-box'>
                  <h4>{data?.map((e) => e?.head2)}</h4>
                  <p>Support and Evolution</p>
                </div>
                <span>02</span>
              </div>
            </div>
            {/* <!-- block -->
                <!-- block --> */}
            <div className='col-lg-4 col-md-12 col-sm-12'>
              <div className='service-advan-box'>
                <div className='serv-adv-icon'>
                  <img src='../images/verify03.svg' alt='' />
                </div>
                <div className='content-box'>
                  <h4>{data?.map((e) => e?.head3)}</h4>
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
