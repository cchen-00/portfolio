import CodingIcon from "../assets/icons/coding_icon.svg?react";
import DesignIcon from "../assets/icons/design_icon.svg?react";
import SvgIcon from "./baseComponents/SvgIcon";
import SkillProgress from "./SkillProgress";

const Skills = () => {
  const codingSkills = [
    { title: "HTML", value: 100 },
    { title: "CSS", value: 100 },
    { title: "JavaScript", value: 90 },
    { title: "React", value: 80 },
    { title: "Redux", value: 60 },
    { title: "Vue", value: 90 },
    { title: "Vuex", value: 90 },
    { title: "MongoDB", value: 40 },
    { title: "Node.js", value: 40 },
    // { title: "Express", value: 30 },
    { title: "Git CLI", value: 80 },
    { title: "Firebase", value: 50 },
    { title: "RESTful API", value: 40 },
    { title: "SASS", value: 70 },
    { title: "Bootstrap", value: 60 },
    // { title: "Vuetify", value: 90 },
    { title: "Tailwind CSS", value: 30 },
    { title: "Framer Motion", value: 30 },
  ];

  const designSkills = [
    { title: "Photoshop", value: 100 },
    { title: "Illustrator", value: 100 },
    { title: "Figma", value: 50 },
    { title: "Sketch", value: 50 },
    { title: "UI/UX", value: 60 },
    { title: "Branding", value: 80 },
    { title: "After Effects", value: 30 },
    { title: "Midjourney", value: 40 },
  ];

  return (
    <div id="skills" className="skills row">
      <div className="col skills__codingCol">
        <div className="skills__title">
          <SvgIcon size="100px" title="design icon">
            <CodingIcon />
          </SvgIcon>
          <div>Coding Skills</div>
        </div>
        <p className="skills__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="skills__container">
          {codingSkills.map((skill, index) => (
            <SkillProgress
              key={index}
              title={skill.title}
              value={skill.value}
            />
          ))}
        </div>
      </div>
      <div className="col">
        <div className="skills__title ">
          <SvgIcon size="100px" title="design icon">
            <DesignIcon />
          </SvgIcon>
          <br />
          <div className="skills__titleDesign">Design Skills</div>
        </div>
        <p className="skills__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="skills__container">
          {designSkills.map((skill, index) => (
            <SkillProgress
              key={index}
              title={skill.title}
              value={skill.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
