import React from "react";

import Feature from "../Components/Feature/Feature";
import SliderComp from "../Components/carousel/SliderComp";

import About from "../Components/About/About";
import Services from "../Components/ServiceOffer/Services";
import Newslatter from "../Components/NewsLatter/Newslatter";
import BestFeature from "../Components/Feature_1/BestFeature";
import NewsBanner from "../Components/NewsBanner/NewsBanner";
import SkillSection from "../Components/Skill/SkillSection";
import Testimonial from "../Components/Testimonial/Testimonial";
import TeamCom from "../Components/Team/TeamCom";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Home Page-Lumens Soft tech</title>
      </Helmet>
      <SliderComp />
      <Feature />
      <About />
      <Services />
      <Newslatter />
      <BestFeature />
      <NewsBanner />
      <SkillSection />
      <Testimonial />
      <TeamCom />
    </div>
  );
};

export default HomePage;
