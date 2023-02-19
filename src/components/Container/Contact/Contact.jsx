import React from "react";
import { contacts, socialIcons } from "../../../Data";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="title">
        <span>Get in Touch</span>
        <h1>Contact Me</h1>
      </div>
      <div className="contact_form">
        <div className="contact_left_container">
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
            {socialIcons.map((icon, index) => {
              return <div key={index}>{icon}</div>;
            })}
          </div>
        </div>
        <div className="contact_right_container">
          <div className="contact_right">
            <h3>Get in Touch</h3>
            <div className="row">
              <input type="text" placeholder="First Name"/>
              <input type="text" placeholder="Last Name"/>
            </div>
            <div className="row">
              <input type="number" placeholder="Phone Number"/>
              <input type="email" placeholder="Email"/>
            </div>
            <div className="row">
              <textarea placeholder="messsage"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
