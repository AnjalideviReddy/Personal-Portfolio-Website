import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss"; // Make sure SCSS is compiled into CSS

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT ME", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "RESUME", to: "/resume" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "CONTACT", to: "/contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  const closeMobileMenu = () => {
    setToggleIcon(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">

        {/* React Logo on the far left */}
        <Link to="/" className="navbar__container__logo">
          <FaReact size={30} />
        </Link>

        {/* Menu Items (toggle class 'active' for mobile menu) */}
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {navLinks.map((item, index) => (
            <li key={index} className="navbar__container__menu__item">
              <Link
                to={item.to}
                className="navbar__container__menu__item__links"
                onClick={closeMobileMenu} // Close menu on link click
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger/X Icon */}
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;  