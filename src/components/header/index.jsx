import React from "react";
import HeaderSocial from "../header-social";
import CV from "../../assets/Shubham_Mahaseth-RESUME.pdf";
import ME from "../../assets/personal_Image.png";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shubham Mahaseth</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <div className="cta">
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="error" />
        </div>
        <div>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
