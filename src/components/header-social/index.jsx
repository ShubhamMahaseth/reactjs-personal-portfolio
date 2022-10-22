import React from "react";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import "./style.css";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/in/shubhammahaseth/" target="blank">
        <SiLinkedin />
      </a>
      <a href="https://github.com/ShubhamMahaseth" target="blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
