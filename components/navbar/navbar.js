import { Link as ScrollLink } from "react-scroll";

import styles from "./Navbar.module.scss";

function navbar() {
  return (
    <nav className={styles.nav}>
      <ScrollLink
        activeClass={styles.active}
        to="about"
        spy={true}
        smooth={true}
        className={styles.link}
      >
        About
      </ScrollLink>
      <ScrollLink
        activeClass={styles.active}
        to="work"
        spy={true}
        smooth={true}
        className={styles.link}
      >
        Projects
      </ScrollLink>
      <ScrollLink
        activeClass={styles.active}
        to="References"
        spy={true}
        smooth={true}
        className={styles.link}
      >
        References
      </ScrollLink>
    </nav>
  );
}

export default navbar;
