import { useEffect, useState } from "react";

export const Navbar = (props) => {
  const [navBarBackground, setNavBarBackgorund] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const changeBackground = () => {
    setNavBarBackgorund(window.scrollY >= 15 ? true : false);
    setMenuActive(window.scrollY <= 15 && false);
  };

  const onToggleClick = () => {
    setMenuActive((prev) => !prev);
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

          <button
            role="button"
            aria-label="navbar-toggle"
            type="button"
            className="navbar-toggle"
            onClick={() => onToggleClick()}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <ul className={`navbar-menu${menuActive ? " toggled" : ""}`}>
          <li className="navbar-menu-item">
            <a href="/#features" className="page-scroll">
              Features
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="/#about" className="page-scroll">
              About
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="/#services" className="page-scroll">
              Services
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="/#portfolio" className="page-scroll">
              Gallery
            </a>
          </li>
          <li className="navbar-menu-item">
            <a href="/#testimonials" className="page-scroll">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
