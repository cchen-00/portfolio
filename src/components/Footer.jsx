import HeaderIcons from "./header/HeaderIcons";
import { NAV_ITEMS } from "../constants/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__nav">
        {NAV_ITEMS.map((item, index) => (
          <div key={index}>
            <a href={`/${item.link}`}>{item.name}</a>
          </div>
        ))}
      </div>
      <div className="footer__icons">
        <HeaderIcons />
      </div>

      <div className="footer__copyright">
        © {currentYear} Ember Chen. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
