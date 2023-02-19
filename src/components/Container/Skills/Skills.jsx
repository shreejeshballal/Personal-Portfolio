import React, { useState } from "react";
import { frontend, backend, other, finishes } from "../../../Data";
import { motion } from "framer-motion";
import "./Skills.scss";
const Skills = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="container" id="skills">
      <motion.div
        initial={{ opacity: "0" }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{duration:1}}
        className="title"
      >
        <span>What am I Good at?</span>
        <h1>Skills and Experience</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{duration:1}}
        className="select"
      >
        <button
          onClick={() => {
            setActive(1);
          }}
          className={active === 1 ? "active" : ""}
        >
          Frontend
        </button>
        <button
          onClick={() => {
            setActive(2);
          }}
          className={active === 2 ? "active" : ""}
        >
          Backend
        </button>
        <button
          onClick={() => {
            setActive(3);
          }}
          className={active === 3 ? "active" : ""}
        >
          Other
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{duration:1}}
        className="skills"
      >
        {active === 1 &&
          frontend.map((frontend, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration:0.8}}
                className="icon"
                key={index}
              >
                {frontend}
              </motion.div>
            );
          })}

        {active === 2 &&
          backend.map((backend, index) => {
            return (
              <motion.div
                div
                className="icon"
                initial={{ opacity: 0, y: -50 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration:0.8}}
                key={index}
              >
                {backend}
              </motion.div>
            );
          })}

        {active === 3 &&
          other.map((other, index) => {
            return (
              <motion.div
                className="icon"
                initial={{ opacity: 0, y: -50 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{duration:0.8}}
                key={index}
              >
                {other}
              </motion.div>
            );
          })}
      </motion.div>
      <motion.div
        className="finishes_container"
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
      >
        {finishes.map((finish) => {
          return (
            <div className="finishes" key={finish.id}>
              <div className="number">{finish.number}</div>
              <div className="item_name">{finish.itemName}</div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
