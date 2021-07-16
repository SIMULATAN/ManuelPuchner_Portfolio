import { Link as ScrollLink } from "react-scroll";

import { AiFillSetting } from "react-icons/ai";

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
            <AiFillSetting className={styles.settingsIcon} />
          </a>
        </header>
      </div>
    </>
  );
}

export default Header;
