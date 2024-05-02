import SvgBase from "./SvgBase.jsx";
import arrowIcon from "../assets/icons/arrow_icon.svg";
import laptop from "../assets/images/laptop.svg";
import plant from "../assets/images/plant.svg";
import notebook from "../assets/images/notebook.svg";
import coffee from "../assets/images/coffee.svg";
import eyeGlasses from "../assets/images/eye_glasses.svg";
import { motion } from "framer-motion";

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
            View My Projects
            <SvgBase
              src={arrowIcon}
              width="20px"
              height="20px"
              alt="arrow icon"
              className="hero__arrowIcon"
            />
          </button>
        </a>
        <motion.div
          className="hero__circle"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 0.9,
            transition: { duration: 0.8 },
            type: "spring",
          }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        />
      </div>

      <SvgBase
        src={laptop}
        width="770px"
        position="absolute"
        className="hero__laptopImg"
      />
      <SvgBase
        src={plant}
        width="570px"
        position="absolute"
        className="hero__plantImg"
      />
      <SvgBase
        src={notebook}
        width="790px"
        position="absolute"
        className="hero__notebookImg"
      />
      <SvgBase
        src={coffee}
        width="260px"
        position="absolute"
        className="hero__coffeeImg"
      />
      <SvgBase
        src={eyeGlasses}
        width="260px"
        position="absolute"
        className="hero__eyeGlassesImg"
      />
    </div>
  );
};

export default Hero;
