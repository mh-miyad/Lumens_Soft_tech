import React from "react";
import ServicesCard from "../Components/ServicesCard/ServicesCard";

import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import useAxios from "../Hooks/useAxios";
import { useEffect } from "react";
import LoadingComp from "../Components/Loading/LoadingComp";
AOS.init();
const Services = () => {
  const [service, setService] = useState([]);
  const { loading, get } = useAxios();

  useEffect(() => {
    get("/servicesList")
      .then((response) => {
        setService(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>All Services Page-Lumens Soft tech</title>
      </Helmet>
      <section className='service-one-part'>
        <div className='max-w-6xl mx-auto px-5 sm:px-10'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='service-one-title-box'>
                <h1 className='service-one-title text-3xl md:text-5xl lg:text-6xl'>
                  Our best Services
                </h1>
                <div className='service-one-text'>
                  We provide best IT services.We always follow the best quality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className='service-part-two'>
          <div className='max-w-6xl mx-auto px-5 sm:px-10'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='service-two-title-box'>
                  <div className='service-two-title'>// Our Service</div>
                  <h1 className='service-two-heading'>
                    We Provide Awesome <span>Services</span>
                  </h1>
                  <div className='service-two-text'>
                    Curabitur sed facilisis erat. Vestibulum pharetra eros eget
                    fringilla porttitor.
                    <br />
                    on Duis a orci nunc. Suspendisse ac convallis sapien, quis
                    commodo libero.
                  </div>
                </div>
                {loading ? (
                  <div className='w-1/2 mx-auto '>
                    <LoadingComp />
                  </div>
                ) : (
                  <div className='row'>
                    {service.map((e, index) => (
                      <ServicesCard
                        description={e?.content}
                        icon={e?.imgUrl1}
                        title={e?.title}
                        index={index + 1}
                        id={e?._id}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
