import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";
import ContactForm from "../Components/Contact/ContactForm";
import useAxios from "../Hooks/useAxios";
const TeamDetails = () => {
  const { id } = useParams();
  const { loading, get } = useAxios();
  const [data, setData] = useState([]);
  // const [
  //   name,
  //   skill_1,
  //   fb_link,
  //   linkedin,
  //   img,
  //   insta_link,
  //   skill_2,
  //   experience,
  //   email,
  //   number,
  //   description,
  // ] = data;
  // console.log(name);
  useEffect(() => {
    get(`/teamDetails/?id=${id}`)
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, [data]);

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
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`${data?.map(
          (e) => e?.name,
        )} details -Lumens Soft tech`}</title>
      </Helmet>
      <section className='team-first'>
        <div className='max-w-6xl mx-auto  container md:px-10 '>
          <div className='row'>
            <div className='col-md-6 col-sm-12 col-lg-6'>
              <div className='team-mem-info'>
                <h3>Hello There ...</h3>
                <h1>{data?.map((e) => e.name)}</h1>

                <span className='team-mem-info'>
                  <span className='text-2xl uppercase'> I Am A </span>
                  {data.map((e) => (
                    <span className='auto-type'>
                      <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed once, initially
                          `${e?.skill_1}`,
                          1000,
                          `${e?.skill_2}`,
                          1000,
                        ]}
                        speed={50}
                        style={{ fontSize: "2em" }}
                        repeat={Infinity}
                      />
                    </span>
                  ))}
                </span>
                {/* <p className='truncate'>{data?.map((e) => e?.description)}</p> */}
              </div>
            </div>
            <div className='col-md-6 col-sm-12 col-lg-6'>
              <div className='team-mem-img'>
                <div className='team-mem-image'>
                  <img src={data?.map((e) => e?.img)} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='team-info'>
        <div className='max-w-6xl mx-auto md:px-20 '>
          <div className='row'>
            {/* <!-- block --> */}
            <div className='col-lg-12 col-sm-12 col-md-12'>
              <div className='team-single-info'>
                <div className='team-info-icons'>
                  <a
                    href={data?.map((e) => e?.fb_link) || "notification"}
                    className='team-info-icon active'>
                    <i className='fa-brands fa-facebook-f'></i>
                  </a>
                  <a
                    href={data?.map((e) => e?.insta_link) || "not found"}
                    className='team-info-icon active'>
                    <i className='fa-brands fa-instagram'></i>
                  </a>
                  <a
                    href={data?.map((e) => e?.linkedin)}
                    className='team-info-icon active'>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </div>
                <div className='team-img-wrap'>
                  <div className='team-img'>
                    <img src={data?.map((e) => e?.img)} alt='' />
                  </div>
                </div>
                <div className='team-info-wrap'>
                  <h4 className='team-mem-title'>
                    {data?.map((e) => e?.name)}
                  </h4>
                  <div className='team-info-item team-department'>
                    <h4>Speciality: </h4>
                    <span>{data?.map((e) => e?.skill_1)}</span>
                  </div>
                  <div className='team-info-item'>
                    <h4>Skill: </h4>
                    <span>{data?.map((e) => e?.skill_1)}</span> ,
                    <span>{data?.map((e) => e?.skill_2)}</span>
                  </div>
                  <div className='team-info-item'>
                    <h4>Experience: </h4>
                    <span>{data?.map((e) => e?.experience)}</span>
                  </div>
                  <div className='team-info-item'>
                    <h4>Email: </h4>
                    <span>{data?.map((e) => e?.email)}</span>
                  </div>
                  <div className='team-info-item'>
                    <h4>Phone: </h4>
                    <span>+88 {data?.map((e) => e?.number)}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- block --> */}
          </div>
        </div>
      </section>
      <section className='team-personal-info'>
        <div className='container max-w-6xl mx-auto md:px-20'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='team-personal-info-box'>
                <h4 className='team-personal-info-title'>
                  //personal information
                </h4>
                <div className='team-persona-info-text'>
                  {data?.map((e) => e?.description)}
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='skill-sect-main' ref={skillsSectionRef}>
        <div className='max-w-6xl mx-auto container md:px-20'>
          <div className='row'>
            <div className='col-lg-6 col-sm-12 col-md-12 progress-main-box'>
              <div id='skill-sect'>
                <h2>//Skills</h2>

                <p>{data?.map((e) => e?.skill_1)}</p>
                <div className='progress'>
                  <div className='progress-bar' data-progress='90'>
                    <span>90%</span>
                  </div>
                </div>
                <p>{data?.map((e) => e?.skill_2)}</p>
                <div className='progress'>
                  <div
                    className='progress-bar progress-bg-2'
                    data-progress='80'>
                    <span>80%</span>
                  </div>
                </div>
                {/* <p>graphic design</p>
                <div className='progress'>
                  <div
                    className='progress-bar progress-bg-4'
                    data-progress='70'>
                    <span>70%</span>
                  </div>
                </div> */}
              </div>
            </div>

            <div className='col-lg-6 col-sm-12 col-md-12 team-skill-exp'>
              <div className='team-skill-exp-main'>
                <h2>//experiense</h2>
                <div className='team-exp-info'>
                  <ul>
                    <li className='mb-[14px]'>
                      If Google can’t crawl your site, it’s not going to rank –
                      but that doesn’t mean avoiding Javascript.
                    </li>
                    <li className='mb-[14px]'>
                      For businesses which sell products online and and improve
                      their product listings in the search results.
                    </li>
                    <li className='mb-[14px]'>
                      If you’re investing in a new website it’s important to
                      ensure it’s built to succeed in the search results too.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='team-personal-con'>
        <div className='team-personal-con-bg'></div>
        <div className='max-w-6xl mxa-auto container md:px-20'>
          <div className='row'>
            <div className='col-lg-3'></div>

            <div className='form-column col-lg-6 col-md-12 col-md-12'>
              <div className='inner-column'>
                <h4 className='team-personal-con-title'>//Contact with us</h4>
                <h2 className='team-personal-con-head'>
                  Feel Free to Contact with
                  <br /> Our IT Experts
                </h2>

                <div className='form-container'>
                  <ContactForm />
                </div>
              </div>
            </div>

            <div className='col-lg-2'></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamDetails;
