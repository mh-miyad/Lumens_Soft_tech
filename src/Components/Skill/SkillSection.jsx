import React, { useEffect, useRef } from "react";
import img from "../../assets/images/progress.jpg";

const SkillSection = () => {
  const skillsSectionRef = useRef(null);

  useEffect(() => {
    const skillsSection = skillsSectionRef.current;

    if (!skillsSection) return; // Check if the reference is available

    const progressBars = skillsSection.querySelectorAll(".progress-bar");

    function showProgress() {
      progressBars.forEach((progressBar) => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
      });
    }

    function hideProgress() {
      progressBars.forEach((p) => {
        p.style.opacity = 0;
        p.style.width = 0;
      });
    }

    function handleScroll() {
      const sectionPos = skillsSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 2;

      if (sectionPos < screenPos) {
        showProgress();
      } else {
        hideProgress();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className='skill-sect-main my-10 ' ref={skillsSectionRef}>
      <div className='max-w-6xl mx-auto  px-16 '>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12 progress-img-main'>
            <div className='progress-img-box'>
              <img src={img} alt='' />
            </div>
          </div>
          <div className='col-lg-6 col-sm-12 col-md-12 progress-main-box'>
            <div id='skill-sect'>
              <h2>//Our Skills</h2>
              <h1>We Are Increasing Business Success With Technology</h1>
              <span className='skill-det'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                eum similique, voluptate nobis sed magni pariatur aliquid
                voluptas exercitationem laudantium?
              </span>

              <p>Web Development</p>
              <div className='progress'>
                <div className='progress-bar' data-progress='90'>
                  <span>90%</span>
                </div>
              </div>
              <p>software Development</p>
              <div className='progress'>
                <div className='progress-bar progress-bg-2' data-progress='80'>
                  <span>80%</span>
                </div>
              </div>
              <p>Digital Marketing</p>
              <div className='progress'>
                <div className='progress-bar progress-bg-3' data-progress='85'>
                  <span>85%</span>
                </div>
              </div>
              <p>graphic design</p>
              <div className='progress'>
                <div className='progress-bar progress-bg-4' data-progress='70'>
                  <span>70%</span>
                </div>
              </div>
              <p>Content writing</p>
              <div className='progress'>
                <div className='progress-bar progress-bg-5' data-progress='75'>
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
