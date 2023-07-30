import React from "react";
import img1 from "../../assets/images/feature-1.png";
import img2 from "../../assets/images/feature-2.png";
import img3 from "../../assets/images/feature-3.png";
import img4 from "../../assets/images/feature-4.png";
import img5 from "../../assets/images/feature-5.png";
import "./feature.css";
const Feature = () => {
  const feature = [
    { id: 1, title: "web design ", img: img3 },
    { id: 2, title: "web  development  ", img: img2 },
    { id: 3, title: "Digital marketing ", img: img1 },
    { id: 4, title: "graphics design ", img: img4 },
    { id: 5, title: "Content writing ", img: img5 },
  ];
  return (
    <section className='relative -mt-32 z-50'>
      <div className='max-w-6xl mx-auto   px-5 sm:px-0 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 '>
          {feature.map((e) => (
            <div className='feature-block_one shadow-2xl shadow-indigo-600/40'>
              <div className='feature-block_one-inner'>
                <a className='overlay-link' href='service-detail.html'></a>
                <span className='color-layer'></span>
                <span className='feature-block_one-icon'>
                  <img src={e.img} alt='' />
                </span>
                <h5 className='feature-block_one-title text-xl'>{e.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
