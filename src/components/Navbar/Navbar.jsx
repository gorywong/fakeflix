import "./navbar.scss";
import { useState, useRef } from "react";
import Searchbar from "../Searchbar/Searchbar";
import useViewport from "../../hooks/useViewport";
import useScroll from "../../hooks/useScroll";
import { motion } from "framer-motion";
import { navbarFadeInVariants } from "../../motionUtils";
import { LOGO_URL, MOBILE_LOGO_URL, PROFILE_PIC_URL } from "../../requests";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const { width } = useViewport();
  const isScrolled = useScroll(70);
  const [genresNav, setGenresNav] = useState(false);
  const [profileNav, setProfileNav] = useState(false);
  const genresNavRef = useRef();
  const profileNavRef = useRef();
  const currentUser = true;
  return (
    <>
      <motion.nav
        className={`Navbar ${isScrolled && "Navbar__fixed"}`}
        variants={navbarFadeInVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <a href="#">
          <img
            className="Navbar__logo"
            src={width >= 600 ? LOGO_URL : MOBILE_LOGO_URL}
            alt=""
          />
        </a>
        {width >= 1024 ? (
          <ul className="Navbar__primarynav Navbar__navlinks">
            <li className="Navbar__navlinks--link">
              <a href="#">Home</a>
            </li>
            <li className="Navbar__navlinks--link">
              <a href="#">TV Series</a>
            </li>
            <li className="Navbar__navlinks--link">
              <a href="#">Movies</a>
            </li>
            <li className="Navbar__navlinks--link">
              <a href="#">New & Popular</a>
            </li>
            <li className="Navbar__navlinks--link">
              <a href="#">My List</a>
            </li>
          </ul>
        ) : (
          <div
            className={`Navbar__primarynav Navbar__navlinks ${
              isScrolled && "Navbar__primarynav--scrolled"
            }`}
            onClick={() => setGenresNav(!genresNav)}
          >
            <span className="Navbar__navlinks--link">Discover</span>
            <FaCaretDown className="Navbar_primarynav--toggler Navbar_primarynav--caret" />
            <div
              className={`Navbar__primarynav--content ${
                genresNav ? "active" : ""
              }`}
            >
              {genresNav && (
                <ul
                  className="Navbar__primarynav--content-wrp"
                  ref={genresNavRef}
                >
                  <li className="Navbar__navlinks--link">
                    <a href="#">Home</a>
                  </li>
                  <li className="Navbar__navlinks--link">
                    <a href="#">TV Series</a>
                  </li>
                  <li className="Navbar__navlinks--link">
                    <a href="#">Movies</a>
                  </li>
                  <li className="Navbar__navlinks--link">
                    <a href="#">New & Popular</a>
                  </li>
                  <li className="Navbar__navlinks--link">
                    <a href="#">My list</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}
        <div className="Navbar__secondarynav">
          <div className="Navbar__item">
            <Searchbar />
          </div>
          <div
            className={`Navbar__navprofile ${profileNav && "active"}`}
            onClick={() => setProfileNav(!profileNav)}
          >
            <img
              className="Navbar__navprofile--avatar Navbar__navprofile--toggler"
              src={
                currentUser && currentUser.photoURL
                  ? currentUser.photoURL
                  : PROFILE_PIC_URL
              }
              alt="Profile Picture"
            />
            <FaCaretDown className="Navbar__navprofile--toggler Navbar__navprofile--caret" />
            <div
              className={`Navbar__navprofile--content ${
                profileNav ? "active" : ""
              }`}
            >
              {profileNav && (
                <ul
                  className="Navbar__navprofile--content-wrp"
                  ref={profileNavRef}
                >
                  {currentUser && (
                    <li className="Navbar__navlinks--link">Sign Out</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
