import React from "react";
import ME from "../../assets/me-about.jpg";
import { FiAward, FiUsers } from "react-icons/fi";
import { VscFolderActive } from "react-icons/vsc";
import "./style.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="error" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <a href="#experience" className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.3+ years Working</small>
            </a>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <a href="#portfolio" className="about__card">
              <VscFolderActive className="about__icon" />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </a>
          </div>
          <p>
            I am currently working in Nagarro as mobile developer have
            experience of 1.3+ years in React Native, delivered high performance
            functionality and buttery smooth UI application to the client,
            ability to write well-documented clean code, quickly grasp new
            technologies and approach. I believe the skillset & experience I
            possess not only bring value to an organization, but in turn shall
            also help me to acquire experience & sharpen my skills.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
