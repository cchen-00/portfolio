import Title from "./baseComponents/Title";
import chenImg from "../assets/images/chen.png";
import Button from "./baseComponents/Button";
import SvgIcon from "./baseComponents/SvgIcon";
import ArrowIcon from "../assets/icons/arrow_icon.svg?react";
import { RESUME_LINK } from "../constants/constants";

const About = () => {
  return (
    <div id="about" className="about">
      <div className=" row about__container">
        <div className="col about__container--left">
          <Title text="About" size="lg" />

          <div className="about__content">
            <p>
              Over 4 years at a fast-paced startup honed my skills in building
              beautiful, user-centric UIs. Prior experience in advertising
              (crafting impactful campaigns) instilled a deep understanding of
              design principles. Now, I leverage my design knowledge (freelance
              & agency work) to bridge the gap between designer vision and
              flawless technical execution.
            </p>
            {/* <p>
              My background extends beyond the front-end. Freelance design work
              and design agency experience allow me to bridge the gap between
              design vision and technical execution. I'm comfortable
              collaborating with designers and understand the importance of
              crafting intuitive user experiences (UX).
            </p> */}
            {/* <p>
              Need a front-end engineer who can create stunning interfaces,
              understand some back-end stuff, and even contribute design ideas?
              I'm your ideal candidate.
            </p> */}
            <div className="about__subtitle">Key Highlights:</div>
            <ul>
              <li>
                4+ years of experience building stunning front-end interfaces.
              </li>
              <li>
                Expertise in HTML, CSS, JavaScript, React, Vue, and SCSS.
              </li>
              <li>
                Experience with back-end technologies like Node.js and MongoDB.
              </li>
              <li>
                Strong understanding of design principles and UX best practices.
              </li>
              <li>Excellent communication and collaboration skills.</li>
            </ul>
            {/* <a href={RESUME_LINK} target="_blank">
              <Button>
                My Resume
                <SvgIcon
                  size="26px"
                  title="Arrow Icon"
                  className="about__buttonIcon"
                >
                  <ArrowIcon />
                </SvgIcon>
              </Button>
            </a>
            <p>
              I am currently seeking full-time/part-time opportunities. Feel
              free to reach out.
            </p> */}
            {/*  */}
          </div>
        </div>
        <div className="col about__container--right">
          <div className="about__card">
            <div className="about__cardContent">
              <p className="about__cardTitle">Random facts:</p>
              <ul>
                <li>I'm a huge Harry Potter fan.</li>
                <li>Love exploring national parks and museums.</li>
                <li>
                  Foodie on a mission to try new things, but cooking is still a
                  work in progress.
                </li>
                <li>
                  A dog person. My heart melts at the sight of a wagging tail
                  and a happy bark.
                </li>
                <li>
                  Country and R&B are my go-to background music, but singing
                  isn't my thing.
                </li>
                <li>
                  My favorite ways to recharge are drawing, drinking coffee, and
                  soaking up the sun.
                </li>
              </ul>
              <div className="about__img">
                <img src={chenImg} alt="Profile" />
                <p>Hello ~</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
