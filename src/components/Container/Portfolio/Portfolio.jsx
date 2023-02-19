import React from "react";
import "./Portfolio.scss";
import { workNavs, workImages } from "../../../Data";
import { FiGithub, FiEye } from "react-icons/fi";
import img from "../../../assets/work1.png";
import { Variant, motion } from "framer-motion";
const Portfolio = () => {
  return (
    <motion.div
      className="container"
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }}
    >
      <div className="title">
        <span>My work</span>
        <h1>Projects</h1>
      </div>
      <div className="project-window">
        {workImages.map((workImage) => {
          return (
            <motion.div
              className="card"
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={workImage.img} alt="work-img" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="hover-layer"
              >
                <h3>{workImage.name}</h3>
                <div className="link">
                  <motion.a
                    href="#"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.2] }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <FiGithub />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 1.2] }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <FiEye />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Portfolio;
