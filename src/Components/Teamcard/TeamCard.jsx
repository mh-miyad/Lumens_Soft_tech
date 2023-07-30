import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ id, img, name, skill, fb, insta }) => {
  return (
    <div className='team-list-col col-lg-4'>
      <div className='team_one-inner fadeInUp'>
        <div className='team_one-image'>
          <img src={img} alt='' className='mx-h-80' />
          <div className='team_one-content'>
            <h5 className='team-one_title'>
              <a href='team-detail.html'>{name}</a>
            </h5>
            <div className='team-one_designation'>Programmer</div>
          </div>
          <div className='team_one-overlay'>
            <div className='team-one_overlay-content'>
              <div className='team_one-text'>{skill}</div>
              <Link className='team_one-more' to={`/team/${id}`}>
                Read more
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- social-box --> */}
        <ul className='team-one_social'>
          <li>
            <a href={fb}>
              <i className='fa-brands fa-facebook-f'></i>
            </a>
          </li>
          <li>
            <a href={insta}>
              <i className='fa-brands fa-twitter'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
