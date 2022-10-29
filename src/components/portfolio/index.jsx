import React from "react";
import IMG1 from "../../assets/portfolio.jpg";
import IMG2 from "../../assets/medgami.PNG";
import IMG3 from "../../assets/crypto.PNG";
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
              href="https://drive.google.com/file/d/1CCVwEQZuMZ5vDWLRIakwr58evuaet32o/view"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG2} alt="error" className="image-wrapper" />
          <h3>This is a portfolio item title.</h3>
          <div className="portfolio__item-cta">
            {" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.epc.medgami"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.epc.medgami"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <img src={IMG3} alt="error" className="image-wrapper" />
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            {" "}
            <a
              href="https://github.com/ShubhamMahaseth/CryptoTracker"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/ShubhamMahaseth/CryptoTracker"
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
