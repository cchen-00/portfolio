import logoColor from "../assets/images/logo-color.png";
import logoFullname from "../assets/images/logo-fullname.png";
import HeaderIcons from "./HeaderIcons";
import { NAV_ITEMS } from "../constants/constants";

export default function Header() {
  return (
    <header className="nav">
      <a href="#hero">
        <img src={logoColor} alt="logo EC" className="nav__logo" />
        <img
          src={logoFullname}
          alt="logo Ember Chens"
          className="nav__topLogo"
        />
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
        <HeaderIcons />
      </div>
    </header>
  );
}
