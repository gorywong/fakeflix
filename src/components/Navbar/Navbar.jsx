import "./navbar.scss";
import useViewport from "../../hooks/useViewport";
import { motion } from "framer-motion";
import { navbarFadeInVariants } from "../../motionUtils";
import { LOGO_URL, MOBILE_LOGO_URL, PROFILE_PIC_URL } from "../../requests";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const { width } = useViewport();
  const [genresNav, setGenresNav] = useState(false);
  const genresNavRef = useRef();
  const profileNavRef = useRef();
  const currentUser = undefined;
  return (
    <>
      <motion.nav
        className="Navbar"
        variants={navbarFadeInVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <a href="#">
          <img src={width >= 600 ? LOGO_URL : MOBILE_LOGO_URL} alt="" />
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
          <div className="Navbar__primarynav Navbar__navlinks">
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
                    <a href="#">My List</a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}
        <div className="Navbar__secondarynav">
          <div className="Navbar__item">{/* <Searchbar /> */}</div>
          <div className="Navbar__navprofile">
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
            <div className="Navbar__navprofile--content">
              <ul
                className="Navbar__navprofile--content-wrp"
                ref={profileNavRef}
              >
                <li className="Navbar__navlinks--link">Sign Out</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
