import React from "react";
import portfolio from "../../../assets/portfolio.JPG";
import { motion } from "framer-motion";
import "./Home.scss";
const Home = () => {
  return (
    <div className="container" id="home">
      <div className="profile">
        <img src={portfolio} alt="portfolio-img" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Shreejesh J Ballal</span>
        </h3>
        <span className="job">Web Developer Based on India</span>
        <span className="text">
          Passionate <br /> to craft innovative <br />
          web products.
        </span>
        <motion.a
          href="contact"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Connect with me
        </motion.a>
        <div className="web">Web Developer</div>
        <div className="ui">Coder</div>
        <div className="freelance">Freelancer</div>
      </div>
    </div>
  );
};

export default Home;
