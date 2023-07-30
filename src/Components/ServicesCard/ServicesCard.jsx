import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ icon, title, description, index }) => {
  return (
    <div className='col-lg-4'>
      <div className='service-two-service-box'>
        <div className='service-two-top-box'>
          <div className='service-two-icon'>
            <img src={icon} alt='' />
          </div>
          <span>{index}</span>
        </div>
        <div className='service-two-info'>
          <h3 className='service-two-info-title'>{title}</h3>
          <p>{description}</p>
          <div className='read-btn'>
            <Link to={"/contact"}>Contact With Us </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
