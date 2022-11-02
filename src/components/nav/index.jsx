import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsFolder2Open } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import "./style.css";

const Nav = () => {
  const [active, setActive] = useState("#");

  const changeActive = () => {
    // console.log(window.scrollY);
    if (window.scrollY <= 335) {
      setActive("#");
    } else if (window.scrollY > 335 && window.scrollY <= 1348) {
      setActive("#about");
    } else if (window.scrollY > 1348 && window.scrollY < 2082) {
      setActive("#experience");
    } else if (window.scrollY > 2082 && window.scrollY <= 3419) {
      setActive("#services");
    } else if (window.scrollY > 3419 && window.scrollY <= 5060) {
      setActive("#portfolio");
    } else if (window.scrollY > 5060) {
      setActive("#contact");
    }
  };
  window.addEventListener("scroll", changeActive);

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={active == "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={active == "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active == "#experience" ? "active" : ""}
      >
        <HiOutlineLightBulb />
      </a>
      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={active == "#services" ? "active" : ""}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={active == "#portfolio" ? "active" : ""}
      >
        <BsFolder2Open />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active == "#contact" ? "active" : ""}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
