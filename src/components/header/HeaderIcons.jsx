import githubIcon from "../../assets/icons/github_icon.png";
import linkedinIcon from "../../assets/icons/linkedin_icon.png";
import behanceIcon from "../../assets/icons/behance_icon.png";

const HeaderIcons = () => {
  return (
    <>
      <a
        href="https://github.com/cchen-00"
        className="nav__icon"
        target="_blank"
      >
        <img src={githubIcon} alt="Github Icon" />
      </a>
      <a
        href="https://www.behance.net/cchengraphfe83"
        className="nav__icon"
        target="_blank"
      >
        <img src={behanceIcon} alt="Behance Icon" />
      </a>
      <a
        href="https://www.linkedin.com/in/chen-c-8059361ba/"
        className="nav__icon"
        target="_blank"
      >
        <img src={linkedinIcon} alt="Linkedin Icon" />
      </a>
    </>
  );
};

export default HeaderIcons;
