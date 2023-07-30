import React from "react";
import ServicesCard from "../Components/ServicesCard/ServicesCard";
import service from "../data/service";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>All Services Page-Lumens Soft tech</title>
      </Helmet>
      <section className='service-one-part'>
        <div className='max-w-6xl mx-auto '>
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
          <div className='max-w-6xl mx-auto '>
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
                <div className='row'>
                  {service.map((e) => (
                    <ServicesCard
                      description={e.description}
                      icon={e.icon}
                      title={e.service_name}
                      index={e.service_id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
