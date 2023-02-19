import React from "react";
import "./About.scss";
import { bios } from "../../../Data";
import { motion } from "framer-motion";
import portfolio from "../../../assets/portfolio.JPG";
const About = () => {
  return (
    <div className="container" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{duration:1}}
        className="title"
      >
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>
      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{duration:1}}
          className="about_left"
        >
          <img src={portfolio} alt="about-img" />
        </motion.div>
        <motion.div
          className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [+250, 0], opacity: 1 }}
          transition={{duration:1}}
        >
          <p>
            Passionate about technology and an enthusiastic learner. Love to
            work on projects involving development using different tech stacks.
            Hardworking and aspiring to be a creative professional web
            developer. Moderately experienced in front end development using
            reactjs library.
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
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            href="https://resume.io/r/gJxFWImBx"
            target="blank_"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
