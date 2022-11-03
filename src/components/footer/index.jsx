import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        PERSONAL PROFI
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank">
          <FaFacebookSquare />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/ShubhamMahaset_" target="_blank">
          <AiOutlineTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; 2022, The content is protected and cannot be reused without
          prior permission. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
