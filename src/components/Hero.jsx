import React from "react";
import ArrowIcon from "../assets/icons/ArrowIcon.jsx";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="hero__textContainer">
        <p className="hero__name">Ember Chen</p>
        <h1 className="hero__title">
          Web <br />
          Developer <br />
          &amp; Designer
        </h1>
        <p className="hero__description">
          Hi, I am a front-end engineer with 4 years of experience, plus 2 years
          design background in advertising agencies. I'm passionate about
          creating cutting-edge, pixel-perfect, and beautiful UI/UX with clean
          code.
        </p>
        <a href="#projects">
          <button className="hero__button">
            View My Projects <ArrowIcon width={20} height={20} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
