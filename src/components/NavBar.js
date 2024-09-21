import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <>
      <motion.nav
        id="header"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="header__logo">
          <li>
            <NavLink to="/">
              <h1 className="logoTitle"> </h1>
              <h1 className="logoTitleDesign"> </h1>
            </NavLink>
          </li>
          <li className="header__menuItems-trigger" onClick={toggleMenu}>
            <svg
              className={`hamburgerIcon ${isOpen ? "is-open" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#fff"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>

            <svg
              className={`closeIcon ${isOpen ? "is-open" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#fff"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </li>
          <li className={`header__menuItems ${isOpen ? "is-open" : ""}`}>
            <ul>
              <li className="header__menuLinks">
                <NavLink to="/order">
                  <motion.span
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Order Sample
                  </motion.span>
                </NavLink>

                <NavLink to="/contact">
                  <motion.span
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Contact
                  </motion.span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </motion.nav>
    </>
  );
}
export default NavBar;
