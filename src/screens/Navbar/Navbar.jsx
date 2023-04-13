import React, { useEffect, useState } from "react";
import "./Navbar.css";
import hamBtn from "./menu-svgrepo-com.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  window.addEventListener("resize", (e) => {
    if (e.target.innerWidth > 768) {
      setShowBtn(false);
      setShowLinks(true);
    } else {
      setShowBtn(true);
      setShowLinks(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowBtn(false);
      setShowLinks(true);
    } else {
      setShowBtn(true);
      setShowLinks(false);
    }
  }, []);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-name">
        <div>Khaled Almelhem</div>
        {showBtn && (
          <img src={hamBtn} alt="hamburger-menu" onClick={handleClick} />
        )}
      </div>

      {showLinks && (
        <div className="navbar-links-container">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#technologies">Technologies </a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
