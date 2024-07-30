import React, { useEffect, useState } from "react";
import module from "./header.module.css";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import { CgMenuRightAlt } from "react-icons/cg";
import { CgCloseR } from "react-icons/cg";
import { Link } from "react-router-dom";
function Header() {
  const [menu, setMenu] = useState("home");
  const [showMenu, setShowMenu] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  }, []);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className={`${module.header} ${navScroll ? module.scrollNav : ""}`}>
        <div className={module.header__logo}>
          <Logo />
        </div>
        <div className={module.header__menu__toggle} onClick={handleMenu}>
          {showMenu ? (
            <CgCloseR className={module.closeNav} />
          ) : (
            <CgMenuRightAlt />
          )}
        </div>
        <div
          className={`${module.header__menu} ${showMenu ? module.actives : ""}`}
        >
          <ul className={module.header__menu__list}>
            <li
              className={`${module.header__menu__list__item} ${
                menu == "home" ? module.active : ""
              }`}
              onClick={() => setMenu("home")}
            >
              <Link to="/" className={module.link}>Home</Link>
            </li>
            <li
              className={`${module.header__menu__list__item} ${
                menu == "about" ? module.active : ""
              }`}
              onClick={() => setMenu("about")}
            >
              <Link to="/about" className={module.link}>About</Link>
            </li>
            <li
              className={`${module.header__menu__list__item} ${
                menu == "services" ? module.active : ""
              }`}
              onClick={() => setMenu("services")}
            >
              <Link to="/projects" className={module.link}>Projects</Link>
            </li>
            <li
              className={`${module.header__menu__list__item} ${
                menu == "contact" ? module.active : ""
              }`}
              onClick={() => setMenu("contact")}
            >
              <Link to="/contact" className={module.link}>Contact</Link>
            </li>
          </ul>
          <div className={module.header__button}>
            <HeaderButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
