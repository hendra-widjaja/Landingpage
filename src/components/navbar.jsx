import { useEffect, useState } from "react";
import { scrollToTarget, useWindowSize } from "./helper/hooks";

export const Navbar = (props) => {
  const [width] = useWindowSize();
  const [navBarBackground, setNavBarBackgorund] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const changeBackground = () => {
    setNavBarBackgorund(window.scrollY >= 15);
    setMenuActive(window.scrollY <= 15 && false);
  };

  const onToggleClick = () => {
    if (width < 768) {
      setMenuActive((prev) => !prev);
    }
  };

  const onMenuClick = (target) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    scrollToTarget(target, 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav id="menu" className={`navbar${navBarBackground ? " active" : ""}`}>
      <div className="container-navbar">
        <div className={`navbar-controller${menuActive ? " toggled" : ""}`}>
          <a className="navbar-brand" href="/#page-top">
            My Landing Page
          </a>

          {width < 768 && (
            <button
              aria-label="navbar-toggle"
              type="button"
              className="navbar-toggle"
              onClick={() => onToggleClick()}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          )}
        </div>

        <ul className={`navbar-menu${menuActive ? " toggled" : ""}`}>
          <li
            className="navbar-menu-item"
            onClick={() => onMenuClick("features")}
          >
            Features
          </li>
          <li className="navbar-menu-item" onClick={() => onMenuClick("about")}>
            About
          </li>
          <li
            className="navbar-menu-item"
            onClick={() => onMenuClick("services")}
          >
            Services
          </li>
          <li
            className="navbar-menu-item"
            onClick={() => onMenuClick("portfolio")}
          >
            Gallery
          </li>
          <li
            className="navbar-menu-item"
            onClick={() => onMenuClick("testimonials")}
          >
            Testimonials
          </li>
        </ul>
      </div>
    </nav>
  );
};
