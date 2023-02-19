import React from "react";
import { contacts, socialIcons } from "../../../Data";
import { motion } from "framer-motion";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span>Get in Touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          className="contact_left_container"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>Got something going on in your mind?</h3>
          <p className="contact_text">
            I have built UI/UX based web applications with all necessary
            features helping out businesses and startups
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
          <div className="social_icons">
            {socialIcons.map((social) => {
              return (
                <a key={social.id} href={social.link} target="blank_">
                  {social.icon}
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="contact_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [+250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>Get in Touch</h3>
          <form
            action="mailto:shreejeshballal@gmail.com"
            enctype="text/plain"
            method="post"
          >
            <div className="row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="row">
              <input type="tel" placeholder="Phone Number" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="row">
              <textarea placeholder="Messsage"></textarea>
            </div>
            <motion.div
              className="btn"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              type="submit"
            >
              <a>Send</a>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
