import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import team from "../data/team";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";
import ContactForm from "../Components/Contact/ContactForm";
const TeamDetails = () => {
  const { id } = useParams();
  const [data] = team?.filter((e) => e.id == id);
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
        <title>{`${data?.name} details -Lumens Soft tech`}</title>
      </Helmet>
      <section className='team-first'>
        <div className='max-w-6xl mx-auto  container md:px-10 '>
          <div className='row'>
            <div className='col-md-6 col-sm-12 col-lg-6'>
              <div className='team-mem-info'>
                <h3>Hello There ...</h3>
                <h1>{data?.name}</h1>

                <span className='team-mem-info'>
                  <span className='text-2xl uppercase'> I Am A </span>
                  <span className='auto-type'>
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed once, initially
                        "Web developer ",
                        1000,
                        "Digital Marketer ",
                        1000,
                      ]}
                      speed={50}
                      style={{ fontSize: "2em" }}
                      repeat={Infinity}
                    />
                  </span>
                </span>
                <p>{data?.description}</p>
              </div>
            </div>
            <div className='col-md-6 col-sm-12 col-lg-6'>
              <div className='team-mem-img'>
                <div className='team-mem-image'>
                  <img src={data?.img} alt='' />
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
                    href={data?.fb || "Not Set "}
                    className='team-info-icon active'>
                    <i className='fa-brands fa-facebook-f'></i>
                  </a>
                  <a
                    href={data?.insta || "Not set "}
                    className='team-info-icon active'>
                    <i className='fa-brands fa-instagram'></i>
                  </a>
                  <a
                    href={data?.linkDin || "Not Set "}
                    className='team-info-icon active'>
                    <i className='fa-brands fa-linkedin-in'></i>
                  </a>
                </div>
                <div className='team-img-wrap'>
                  <div className='team-img'>
                    <img src={data?.img} alt='' />
                  </div>
                </div>
                <div className='team-info-wrap'>
                  <h4 className='team-mem-title'>{data?.name}</h4>
                  <div className='team-info-item team-department'>
                    <h4>Speciality: </h4>
                    <span>Not Set </span>
                  </div>
                  <div className='team-info-item'>
                    <h4>Skill: </h4>
                    <span>{data?.skill}</span>
                  </div>
                  <div className='team-info-item'>
                    <h4>Experience: </h4>
                    <span>{data?.experience}</span>
                  </div>
                  <div className='team-info-item'>
                    <h4>Email: </h4>
                    <span>{data?.email}</span>
                  </div>
                  <div className='team-info-item'>
                    <h4>Phone: </h4>
                    <span>+88 {data?.mobile}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- block --> */}
          </div>
        </div>
      </section>
      <section class='team-personal-info'>
        <div class='container max-w-6xl mx-auto md:px-20'>
          <div class='row'>
            <div class='col-lg-12'>
              <div class='team-personal-info-box'>
                <h4 class='team-personal-info-title'>//personal information</h4>
                <div class='team-persona-info-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias ab atque dicta tenetur minima distinctio at
                  assumenda quam enim! Molestiae ducimus eum quaerat aperiam, et
                  officia deleniti, dolorem velit facere perferendis id omnis
                  harum ipsum cumque earum magnam nemo! Corporis, aut. Fuga
                  nobis, sapiente blanditiis earum quos saepe fugit eaque atque
                  veniam beatae est provident ut voluptatibus, enim quod cum
                  asperiores sequi laudantium eos eveniet dolorem voluptates
                  reiciendis inventore. Molestias obcaecati laboriosam voluptate
                  suscipit tempore aliquam, iusto temporibus recusandae
                  praesentium quidem, unde ullam velit cum animi repellat
                  adipisci! Exercitationem, illo! Sint, ipsa! Minus ea nihil
                  aliquam dolor, sint quidem numquam maxime esse sunt voluptate,
                  nulla voluptates quas ipsa accusantium saepe at assumenda,
                  molestias magni sapiente. Iste temporibus modi illo beatae!
                </div>
                <br />
                <div class='team-persona-info-text'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque commodi autem minus magni. Quae quia libero cum
                  doloremque deserunt, cumque quis consequatur, enim voluptates,
                  veniam inventore nobis totam? Laudantium eveniet reprehenderit
                  quis vel earum perferendis sequi corrupti aliquam commodi est.
                  Impedit laudantium ipsa laborum veniam incidunt architecto
                  itaque fuga possimus veritatis assumenda ex facilis nobis esse
                  saepe eligendi magni nemo numquam nihil, aspernatur quia
                  placeat maiores consequatur quae. Odio asperiores perspiciatis
                  labore quo tenetur nostrum facilis necessitatibus quos vel
                  veniam!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='skill-sect-main' ref={skillsSectionRef}>
        <div class='max-w-6xl mx-auto container md:px-20'>
          <div class='row'>
            <div class='col-lg-6 col-sm-12 col-md-12 progress-main-box'>
              <div id='skill-sect'>
                <h2>//Skills</h2>

                <p>Web Development</p>
                <div class='progress'>
                  <div class='progress-bar' data-progress='90'>
                    <span>90%</span>
                  </div>
                </div>
                <p>software Development</p>
                <div class='progress'>
                  <div class='progress-bar progress-bg-2' data-progress='80'>
                    <span>80%</span>
                  </div>
                </div>
                <p>graphic design</p>
                <div class='progress'>
                  <div class='progress-bar progress-bg-4' data-progress='70'>
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-lg-6 col-sm-12 col-md-12 team-skill-exp'>
              <div class='team-skill-exp-main'>
                <h2>//experiense</h2>
                <div class='team-exp-info'>
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
      <section class='team-personal-con'>
        <div class='team-personal-con-bg'></div>
        <div class='max-w-6xl mxa-auto container md:px-20'>
          <div class='row'>
            <div class='col-lg-3'></div>

            <div class='form-column col-lg-6 col-md-12 col-md-12'>
              <div class='inner-column'>
                <h4 class='team-personal-con-title'>//Contact with us</h4>
                <h2 class='team-personal-con-head'>
                  Feel Free to Contact with
                  <br /> Our IT Experts
                </h2>

                <div class='form-container'>
                  <ContactForm />
                </div>
              </div>
            </div>

            <div class='col-lg-2'></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamDetails;
