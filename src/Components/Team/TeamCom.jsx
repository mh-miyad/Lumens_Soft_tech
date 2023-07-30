import React from "react";

import team from "../../data/team";
import { Link } from "react-router-dom";
const TeamCom = () => {
  return (
    <div>
      <section className='team-one' id='team'>
        <div className='team-one-bg'></div>
        <div
          id='team_one_pattern'
          className='rellax'
          data-rellax-speed='6'
          style={{ backgroundImage: "url(../images/pattern-17.png)" }}></div>
        <div
          id='team_one_pattern-two'
          className='rellax'
          data-rellax-speed='4'
          style={{ backgroundImage: "url(../images/pattern-24.png)" }}></div>
        <div className='max-w-6xl mx-auto px-16 '>
          <div className='team-tile-box'>
            <div className='team-title'>Team Member</div>
            <h2 className='team-heading'>Passionate Personalities,</h2>
            <h2 className='team-heading-color'>
              <span>Versatile</span> Brains
            </h2>
          </div>
          <div className='row '>
            {/* <!-- block start --> */}
            <div className='col-md-12'>
              <div className='team-main-box'>
                <div className='team-one-carousel owl-carousel owl-theme owl-loaded'>
                  <div className='owl-stage-outer team-one-stage-outer'>
                    <div className='owl-stage team-one-stage'>
                      {/* Individual team member items go here */}
                      {team.map((e) => (
                        <div className='owl-item team-one-item' key={e.id}>
                          <div className='team_one col-lg-3'>
                            <div
                              className='team_one-inner fadeInUp'
                              data-wow-delay='0ms'
                              data-wow-duration='1500ms'>
                              <div className='team_one-image'>
                                <img src={e.img} alt='' className=' max-h-64' />
                                <div className='team_one-content'>
                                  <h5 className='team-one_title'>
                                    <a href='team-detail.html'>{e.name}</a>
                                  </h5>
                                  <div className='team-one_designation'>
                                    {"Team Member"}
                                  </div>
                                </div>
                                <div className='team_one-overlay'>
                                  <div className='team-one_overlay-content'>
                                    <div className='team_one-text'>
                                      {e.skill}
                                    </div>
                                    <Link
                                      to={`/team/${e.id}`}
                                      className='team_one-more'
                                      href='team-detail.html'>
                                      Read more
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              {/* <!-- social-box --> */}
                              <ul className='team-one_social'>
                                <li>
                                  <a href='https://www.facebook.com/'>
                                    <i className='fa-brands fa-facebook-f'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href='https://www.twitter.com/'>
                                    <i className='fa-brands fa-twitter'></i>
                                  </a>
                                </li>
                                <li>
                                  <a href='https://dribbble.com/'>
                                    <i className='fa-brands fa-dribbble'></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- block end --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamCom;
