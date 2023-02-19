import React from "react";
import dppic from "../../../assets/dppic.jpg";
import { motion } from "framer-motion";
import "./Home.scss";
const Home = () => {
  const moveVariants={
    animation:{
      y:[0,-15],
      transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:1.8,
        delay:1
      }
    }
  }
  return (
    <motion.div
    initial={{y:-25,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.9,delay:0.5}} className="container" id="home">
      <div className="profile">
        <img src={dppic} alt="portfolio-img" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>Shreejesh J Ballal</span>
        </h3>
        <span className="job">Web Developer Based on India</span>
        <span className="text">
          Passionate <br /> to craft innovative <br />
          web products
        </span>
        <motion.a
          href="#contact"
          variants={moveVariants}
          animate="animation"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Connect with me
        </motion.a>
        <div className="web">Web Developer</div>
        <div className="ui">Coder</div>
        <div className="freelance">Freelancer</div>
      </div>
    </motion.div>
  );
};

export default Home;
