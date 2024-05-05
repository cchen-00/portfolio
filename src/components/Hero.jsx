import SvgIcon from "./SvgIcon.jsx";
import SvgImg from "./SvgImg.jsx";
import ArrowIcon from "../assets/icons/arrow_icon.svg?react";
import laptop from "../assets/images/laptop.svg";
import plant from "../assets/images/plant.svg";
import notebook from "../assets/images/notebook.svg";
import coffee from "../assets/images/coffee.svg";
import eyeGlasses from "../assets/images/eye_glasses.svg";
import heroText from "../assets/images/hero_text.svg";
import bgColor from "../assets/images/bg_color_block.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <div className="hero__textContainer">
        <p className="hero__name">Ember Chen</p>

        <div className="hero__title">
          <SvgImg src={heroText} width="380px" alt="Web Developer Designer" />
          <motion.div
            className="hero__titleBg"
            transition={{ duration: 2 }}
            initial={{ width: 0 }}
            animate={{ width: "380px" }}
          >
            <SvgImg src={bgColor} width="380px" alt="background color block" />
          </motion.div>
        </div>

        <p className="hero__description">
          Hi, I am a front-end engineer with 4 years of experience, plus 2 years
          design background in advertising agencies. I'm passionate about
          creating cutting-edge, pixel-perfect, and beautiful UI/UX with clean
          code.
        </p>

        <a href="#projects">
          <button className="hero__button">
            View Projects
            <SvgIcon size="20px" title="arrow icon">
              <ArrowIcon />
            </SvgIcon>
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

      <SvgImg
        src={laptop}
        width="770px"
        className="hero__laptopImg"
        alt="laptop image"
      />
      <SvgImg
        src={plant}
        width="570px"
        className="hero__plantImg"
        alt="plant image"
      />
      <SvgImg
        src={notebook}
        width="790px"
        className="hero__notebookImg"
        alt="notebook image"
      />
      <SvgImg
        src={coffee}
        width="260px"
        className="hero__coffeeImg"
        alt="coffee image"
      />
      <SvgImg
        src={eyeGlasses}
        width="260px"
        className="hero__eyeGlassesImg"
        alt="eye glasses image"
      />
    </div>
  );
};

export default Hero;
