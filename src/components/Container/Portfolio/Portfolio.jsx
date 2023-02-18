import React from "react";
import "./Portfolio.scss";
import { workNavs, workImages } from "../../../Data";
import { FiGithub, FiEye } from "react-icons/fi";
import img from "../../../assets/work1.png";
import { Variant, motion } from "framer-motion";
const Portfolio = () => {
  return (
    <div className="container" id="portfolio">
      <div className="title">
        <span>My work</span>
        <h1>Awesome Projects</h1>
      </div>
      <div className="project-window">
        {workImages.map((workImage) => {
          return (
            <div className="card">
              <img src={workImage.img} alt="work-img" />
              <motion.div
              initial={{opacity:0}}
              whileHover={{opacity:1}}
              transition={{duration:0.3,ease:"easeInOut"}}
              className="hover-layer">
              
                <h3>{workImage.name}</h3>
                <div className="link">
                <a href="#">
                  <FiGithub />
                </a>
                <a href="#">
                  <FiEye />
                </a>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
