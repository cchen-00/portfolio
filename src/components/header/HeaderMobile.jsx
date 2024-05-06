import { useState } from "react";
import logoColor from "../../assets/images/logo-color.png";
import logoFullname from "../../assets/images/logo-fullname.png";
import HeaderIcons from "./HeaderIcons";
import SvgIcon from "../baseComponents/SvgIcon.jsx";
import CloseIcon from "../../assets/icons/close.svg?react";
import MenuIcon from "../../assets/icons/menu.svg?react";
import { NAV_ITEMS } from "../../constants/constants.js";

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navMobile">
      <a href="/#hero">
        <img
          src={logoColor}
          alt="logo Ember Chen"
          className="navMobile__logo"
        />
        <img
          src={logoFullname}
          alt="logo Ember Chen"
          className="navMobile__topLogo"
        />
      </a>

      <button
        className={
          menuOpen
            ? "navMobile__menuBtn navMobile__menuBtn--active"
            : "navMobile__menuBtn"
        }
        onClick={handleMenuClick}
      >
        <SvgIcon size="24px" title="open and close menu icon">
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </SvgIcon>
      </button>

      <div
        className={
          menuOpen ? "navMobile__menu navMobile__menu--open" : "navMobile__menu"
        }
      >
        {NAV_ITEMS.map((item, index) => (
          <div key={index} className="navMobile__item">
            <a href={`/${item.link}`}>{item.name}</a>
          </div>
        ))}

        <div className="navMobile__icons">
          <HeaderIcons />
        </div>
      </div>

      <div
        className={
          menuOpen
            ? "navMobile__overlay navMobile__overlay--active"
            : "navMobile__overlay"
        }
        onClick={handleMenuClick}
      ></div>
    </header>
  );
};

export default HeaderMobile;
