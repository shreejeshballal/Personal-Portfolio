import React from "react";
import "./About.scss";
import { bios } from "../../../Data";
import { motion } from "framer-motion";
import portfolio from "../../../assets/portfolio.JPG";
const About = () => {
  return (
    <div className="container" id="about">
      <div className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </div>
      <div className="about_container">
        <div className="about_left">
          <img src={portfolio} alt="about-img" />
        </div>
        <div className="about_right">
          <p>
          Passionate about technology and an enthusiastic learner. Love to work on projects involving development using different tech stacks. Hardworking and aspiring to be a creative professional web developer. Moderately experienced in front end development using reactjs library. 
          </p>
          {bios.map((bio) => {
            return (
              <div className="bio" key={bio.id}>
                <span className="bioKey">
                  {bio.icon}
                  {bio.key}
                </span>
                <span className="bioValue">{bio.value}</span>
              </div>
            );
          })}
          <motion.a whileHover={{scale:1.1}} transition={{duration:0.3}} href="#" download="">Download Resume</motion.a>
        </div>
      </div>
    </div>
  );
};

export default About;
