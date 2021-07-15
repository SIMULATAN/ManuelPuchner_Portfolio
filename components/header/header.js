import { Link as ScrollLink } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCog } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import styles from "./Header.module.scss";

function Header({ children }) {
  return (
    <>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <h1>
            <ScrollLink
              activeClass={styles.active}
              to="about"
              spy={true}
              smooth={true}
            >
              ManuelP
            </ScrollLink>
          </h1>

          {children}

          <a className={styles.settingsButton}>
            <FontAwesomeIcon className={styles.settingsIcon} icon={faCog} />
          </a>
        </header>
      </div>
    </>
  );
}

export default Header;
