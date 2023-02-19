import React from "react";
import { motion } from "framer-motion";
import "./Footer.scss";
const Footer = () => {
  return (
    <motion.div className="footer"
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}>
      <div className="copyRight">
        <p>
          Copyright &copy; 2023 All rights reserved | Made by {""}
          <span>Shreejesh J Ballal</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Footer;
