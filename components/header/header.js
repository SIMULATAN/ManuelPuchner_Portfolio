import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

import { AiFillSetting, AiOutlineSetting } from "react-icons/ai";

import styles from "./Header.module.scss";

function Header({ children }) {
  const test = () => {
    document.body.style.setProperty("--theme-color", "#ff0000");
  };

  // #151418
  const [headerbg, setHeaderbg] = useState("rgba(0,0,0,0)");
  useEffect(() => {
    const checkPos = () => {
      let scrollPos =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollPos > 325 && scrollPos < 500) {
        setHeaderbg("rgb(21, 20, 24)");
      } else if (scrollPos < 325 && scrollPos > 100) {
        setHeaderbg("rgba(0,0,0,0)");
      }
    };

    window.addEventListener("scroll", checkPos);

    return () => {
      window.removeEventListener("scroll", checkPos);
    };
  }, []);

  return (
    <>
      <div
        className={styles.headerWrapper}
        style={{ backgroundColor: headerbg }}
      >
        <header className={styles.header}>
          <h1>
            <ScrollLink
              activeClass={styles.active}
              to="about"
              spy={true}
              smooth={true}
            >
              <span className={styles.desktopLogo}>ManuelP</span>
              <span className={styles.mobileLogo}>MP</span>
            </ScrollLink>
          </h1>

          {children}

          <a className={styles.settingsButton} onClick={test}>
            <AiFillSetting
              className={`${styles.settingsIcon} ${styles.desktopIcon}`}
            />
            <AiOutlineSetting
              className={`${styles.settingsIcon} ${styles.mobileIcon}`}
            />
          </a>
        </header>
      </div>
    </>
  );
}

export default Header;
