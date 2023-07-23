import React from "react";
import "./Contact.css";

const Contact = () => {
  // return (
  //   <div>
  //     <div id="contact" className="contact-container">
  //       <p>Khaled Almelhem</p>
  //       <p>Haninge, Stockholm</p>
  //       <p>+46 (0)762 499 610</p>
  //       <p>kh.almelhem@gmail.com</p>
  //     </div>
  //   </div>
  // );

  return (
    <div id="contact" className="contact-me-container">
      <h2 className="section-heading">Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Name</h3>
          <p>Khaled Almelhem</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>0046762499610</p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p>kh.almelhem@gmail.com</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>Sweden, Stockholm</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
