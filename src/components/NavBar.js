import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NavBar() {
  return (
    <>
      <nav id="NavBar">
        <div className="nav">
          <NavLink to="/">
            <motion.div whileTap={{ y: "-40%", transition: "0.5s" }}>
              logohere
            </motion.div>
          </NavLink>

          <NavLink to="/order">
            <motion.div whileTap={{ y: "-40%", transition: "0.5s" }}>
              Order Sample
            </motion.div>
          </NavLink>

          <NavLink to="/contact">
            <motion.div whileTap={{ y: "-40%", transition: "0.5s" }}>
              Kontakt
            </motion.div>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
