import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa";
import { MdOutlineHomeRepairService } from "react-icons/md";
import "./style.css";

const Nav = () => {
  const [active, setActive] = useState("#");

  // window.addEventListener("scroll", scrolled);

  // function scrolled() {
  //   let el = document.getElementById("portfolio");
  //   console.log(el);
  // }

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
        <BsBook />
      </a>
      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={active == "#services" ? "active" : ""}
      >
        <MdOutlineHomeRepairService />
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
