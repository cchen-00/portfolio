import githubIcon from "../assets/icons/github_icon.png";
import linkedinIcon from "../assets/icons/linkedin_icon.png";
import behanceIcon from "../assets/icons/behance_icon.png";
import EmailIcon from "../assets/icons/email_icon.svg?react";
import SvgIcon from "./baseComponents/SvgIcon";
import { LINKS } from "../constants/constants";

const SocialMediaIcons = () => {
  return (
    <>
      <a href={LINKS.github} className="nav__icon" target="_blank">
        <img src={githubIcon} alt="Github Icon" />
      </a>
      <a href={LINKS.behance} className="nav__icon" target="_blank">
        <img src={behanceIcon} alt="Behance Icon" />
      </a>
      <a href={LINKS.linkedin} className="nav__icon" target="_blank">
        <img src={linkedinIcon} alt="Linkedin Icon" />
      </a>
      <a href={`mailto:${LINKS.email}`} className="nav__icon">
        <SvgIcon size="100%" title="Email Icon">
          <EmailIcon />
        </SvgIcon>
      </a>
    </>
  );
};

export default SocialMediaIcons;
