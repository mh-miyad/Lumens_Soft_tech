import React from "react";
import "./Services.css";
import img from "../../assets/images/service-8.png";
import img_1 from "../../assets/images/service-8-1.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Services = () => {
  const service = [
    {
      id: 1,
      title: "web design ",
      img: img,
      image: img_1,
      description:
        "Propel your brand's online triumph through visionary web design..",
    },
    {
      id: 2,
      title: "web  development  ",
      img: img,
      image: img_1,
      description: "Expert web development agency crafts powerful,......",
    },
    {
      id: 3,
      title: "Digital marketing ",
      img: img,
      image: img_1,
      description:
        "Empower brand ascendancy with dynamic digital marketing; drive success captivate.",
    },
    {
      id: 4,
      title: "graphics design ",
      img: img,
      image: img_1,
      description: "Enchanting visuals, unforgettable brand masterpieces ...",
    },
    {
      id: 5,
      title: "Content writing ",
      img: img,
      image: img_1,
      description:
        "Words that ignite greatness - Embrace storytelling, engage audiences, elevate brands.",
    },
  ];
  return (
    <section className='services-one'>
      <div className='services-one-bg'></div>
      <div className='max-w-6xl mx-auto px-5  '>
        <div className='serv-one-title'>
          <div className='serv-one-title-one'>
            <p>~ Our Awesome Services ~</p>
            <h2 className='serv-one-title-two'>
              Choose <span>The Best</span> IT <br /> Service Company
            </h2>
          </div>
        </div>
        {/* <!-- services carousol --> */}
        <div className='serv-one-inner-max-w-6xl mx-auto '>
          <div className='serv-owl owl-carousel'>
            {/* <!-- block --> */}
            {service?.map((e) => (
              <div className='owl-carousel-box '>
                <div className='owl-carousel-box-inner'>
                  <span className='serv-caro-icon'>
                    <img src={e.img} alt='' />
                  </span>
                  <h5>{e.title}</h5>
                  <p>{e.description}</p>
                  <div className='owl-carousel-box-overly'>
                    <div className='owl-carousel-box-overly-color-layer'></div>
                    <span className='serv-caro-over-icon'>
                      <img src={e.image} alt='' />
                    </span>
                    <h5 className='text-black'>{e.title}</h5>
                    <button className='over-ly-a '>Learn More</button>
                  </div>
                </div>
              </div>
            ))}

            {/* <!-- services carousol --> */}
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Services;
