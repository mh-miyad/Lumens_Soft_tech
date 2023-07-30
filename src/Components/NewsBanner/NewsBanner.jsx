import React, { useEffect } from "react";
import CountUp from "react-countup";
import "./NewsBanner.css";
import img1 from "../../assets/images/company-img.jpg";
import img2 from "../../assets/images/best-it.svg";
const NewsBanner = () => {
  useEffect(() => {
    var count = document.getElementsByClassName("count");
    var inc = [];
    function intervalFunc() {
      for (let i = 0; i < count.length; i++) {
        inc.push(1);
        if (inc[i] != count[i].getAttribute("max-data")) {
          inc[i]++;
        }
        count[i].innerHTML = inc[i];
      }
    }
    var main = document.getElementById("company-two");
    window.onscroll = function () {
      var timer = setInterval(() => {
        var topElem = main.offsetTop;
        var btmElem = main.offsetTop + main.clientHeight;
        var topScreen = window.pageYOffset;
        var btmScreen = window.pageYOffset + window.innerHeight;
        if (btmScreen > topElem && topScreen < btmElem) {
          intervalFunc();
        } else {
          clearInterval(timer);
          for (let i = 0; i < count.length; i++) {
            count[i].innerHTML = 1;
            inc = [];
          }
        }
      }, 100);
    };
  }, []);
  return (
    <div>
      <section className='company-one'>
        <div className='company-one-bg'></div>
        <div className='max-w-6xl mx-auto px-16  '>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='company-one-box'>
                <div className='company-one-tile'>
                  <h4 className='company-one-title-one'>
                    Why You Choose Our Company?
                  </h4>
                  <h2 className='company-one-title-two'>
                    Choose <span>The Best IT</span> <br />
                    Service Company
                  </h2>
                </div>
                {/* <!-- company details part --> */}
                <div className='row'>
                  <div className='col-md-6 col-sm-6'>
                    <div className='company-one-details'>
                      <p>
                        We offers a full-cycle software development services
                        that meet varied business requirements to help improve
                        business performance of enterprises.
                      </p>
                    </div>
                  </div>
                  <div className='col-md-6 col-sm-6'>
                    <div className='company-one-details-list'>
                      <ul className='company-one-det-ul'>
                        <li className='company-one-det-list'>
                          <i className='fa-solid fa-check-double'></i>Take a
                          professional approach
                        </li>
                        <li className='company-one-det-list'>
                          <i className='fa-solid fa-check-double'></i>Take a
                          professional approach
                        </li>
                        <li className='company-one-det-list'>
                          <i className='fa-solid fa-check-double'></i>Take a
                          professional approach
                        </li>
                        <li className='company-one-det-list'>
                          <i className='fa-solid fa-check-double'></i>Take a
                          professional approach
                        </li>
                        <li className='company-one-det-list'>
                          <i className='fa-solid fa-check-double'></i>Take a
                          professional approach
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- company details part --> */}
              </div>
            </div>
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='company-one-img'>
                <div className='company-img-one'>
                  <img
                    src={img1}
                    alt=''
                    className='rounded-2xl shadow-2xl shadow-indigo-600/50'
                  />
                </div>
                <div className='company-img-two '>
                  <img src={img2} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='company-two'>
        <div className='max-w-6xl mx-auto px-16  '>
          <div className='company-two-main'>
            <div className='company-two-main-title'>
              <h2>We develops strategic software solutions for businesses.</h2>
            </div>
            <div className='row'>
              <div className='count-main-box col-md-3 col-lg-3 col-sm-3'>
                <div className='count-heading'>
                  <div className='counter-box'>
                    <div className='count' max-data='320'>
                      {/* <CountUp end={100} duration={10} /> */}0
                    </div>
                    <span>
                      <i className='fa-solid fa-plus'></i>
                    </span>
                  </div>
                  <h2 className='reaction'>Our Clients</h2>
                </div>
              </div>
              <div className='count-main-box col-md-3 col-lg-3 col-sm-3'>
                <div className='count-heading'>
                  <div className='counter-box'>
                    <div className='count' max-data='450'>
                      {/* <CountUp end={790} duration={10} /> */}0
                    </div>
                    <span>
                      <i className='fa-solid fa-plus'></i>
                    </span>
                  </div>
                  <h2 className='reaction'> Prjoect done</h2>
                </div>
              </div>
              <div className='count-main-box col-md-3 col-lg-3 col-sm-3'>
                <div className='count-heading'>
                  <div className='counter-box'>
                    <div className='count' max-data='300'>
                      {/* <CountUp end={100} duration={10} /> */} 0
                    </div>
                    <span>
                      <i className='fa-solid fa-plus'></i>
                    </span>
                  </div>
                  <h2 className='reaction'> Happy clients</h2>
                </div>
              </div>
              <div className='count-main-box col-md-3 col-lg-3 col-sm-3'>
                <div className='count-heading'>
                  <div className='counter-box'>
                    <div className='count' max-data='280'>
                      {/* <CountUp end={89} /> */} 0
                    </div>
                    <span>
                      <i className='fa-solid fa-plus'></i>
                    </span>
                  </div>
                  <h2 className='reaction'>Coffee with clients</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsBanner;
