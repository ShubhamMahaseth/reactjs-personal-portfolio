import React from "react";
import IMG1 from "../../assets/portfolio.jpg";

import "./style.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="error" className="image-wrapper" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            {" "}
            <a
              href="https://github.com/ShubhamMahaseth/Food_Ordering_App_ReactNative"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/ShubhamMahaseth/Food_Ordering_App_ReactNative"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="error" className="image-wrapper" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            {" "}
            <a
              href="https://github.com/ShubhamMahaseth/Food_Ordering_App_ReactNative"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/ShubhamMahaseth/Food_Ordering_App_ReactNative"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="error" className="image-wrapper" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            {" "}
            <a
              href="https://github.com/ShubhamMahaseth/Food_Ordering_App_ReactNative"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/ShubhamMahaseth/Food_Ordering_App_ReactNative"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="error" className="image-wrapper" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            {" "}
            <a
              href="https://github.com/ShubhamMahaseth/Food_Ordering_App_ReactNative"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/ShubhamMahaseth/Food_Ordering_App_ReactNative"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="error" className="image-wrapper" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            {" "}
            <a
              href="https://github.com/ShubhamMahaseth/Food_Ordering_App_ReactNative"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/ShubhamMahaseth/Food_Ordering_App_ReactNative"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG1} alt="error" className="image-wrapper" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            {" "}
            <a
              href="https://github.com/ShubhamMahaseth/Food_Ordering_App_ReactNative"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/ShubhamMahaseth/Food_Ordering_App_ReactNative"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
