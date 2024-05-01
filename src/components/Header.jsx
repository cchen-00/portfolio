import logo from "../assets/images/logo.png";
import logoColor from "../assets/images/logo-color.png";
import githubIcon from "../assets/icons/github_icon.png";
import linkedinIcon from "../assets/icons/linkedin_icon.png";
import behanceIcon from "../assets/icons/behance_icon.png";
import { NAV_ITEMS } from "../constants/constants";

export default function Header() {
  return (
    <header className="nav">
      <a href="#hero">
        <img src={logo} alt="logo EC" className="nav__logo" />
        <img src={logoColor} alt="colored logo EC" className="nav__colorLogo" />
      </a>

      <div className="nav__menu">
        {NAV_ITEMS.map((item, index) => (
          <div key={index} className="nav__item">
            <a href={item.link} className="nav__link">
              {item.name}
            </a>
          </div>
        ))}
      </div>

      <div className="nav__icons">
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
      </div>
    </header>
  );
}
