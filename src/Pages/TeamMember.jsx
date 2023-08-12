import React from "react";
import TeamCard from "../Components/Teamcard/TeamCard";
// import team from "../data/team";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { useEffect } from "react";
import useAxios from "../Hooks/useAxios";
AOS.init();
const TeamMember = () => {
  const { loading, get } = useAxios();
  const [team, setTeam] = useState([]);
  useEffect(() => {
    get("/teamList")
      .then((response) => {
        setTeam(response);
      })
      .catch((error) => {
        console.error("GET Error:", error);
      });
  }, [team]);
  return (
    <div className=''>
      <Helmet>
        <meta charSet='utf-8' />
        <title>About Us Page-Lumens Soft tech</title>
      </Helmet>
      <section className='team-first'>
        <div className='container mx-auto  '>
          <div className='row'>
            <div className='team-first-main-box col-lg-12 col-sm-12 col-md-12'>
              <div className='text-center mt-5  text-4xl md:text-4xl lg:text-6xl text-black'>
                <h2 className='uppercase opacity-5'>ARCHIVES: Our Teams</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='text-center mt-5  text-4xl md:text-4xl lg:text-6xl text-black'>
        <h2 className='uppercase'>ARCHIVES: Our Teams</h2>
      </div>
      <section className='team-list'>
        <div className='max-w-6xl mx-auto '>
          <div className='row'>
            {team.map((e) => (
              <TeamCard
                key={e._id}
                img={e.img}
                name={e.name}
                skill={e.skill_1}
                fb={e.fb_link}
                insta={e.insta_link}
                id={e._id}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMember;
