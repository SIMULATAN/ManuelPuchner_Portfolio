import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

import { AiFillSetting } from "react-icons/ai";

import styles from "./Header.module.scss";

function Header({ children }) {
  const test = () => {
    document.body.style.setProperty("--theme-color", "#ff0000");
  };

  // #151418
  const [headerbg, setHeaderbg] = useState("rgba(0,0,0,0)");
  useEffect(() => {
    window.addEventListener("scroll", checkPos);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const checkPos = () => {
    //                    for percent scrolled
    // const winScroll =
    //   document.body.scrollTop || document.documentElement.scrollTop;
    // const height =
    //   document.documentElement.scrollHeight -
    //   document.documentElement.clientHeight;
    // const scrolled = winScroll / height;
    //console.log(scrolled)

    if ((document.body.scrollTop || document.documentElement.scrollTop) > 325) {
      setHeaderbg("rgb(21, 20, 24)");
    } else {
      setHeaderbg("rgba(0,0,0,0)");
    }
  };
  
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
              ManuelP
            </ScrollLink>
          </h1>

          {children}

          <a className={styles.settingsButton} onClick={test}>
            <AiFillSetting className={styles.settingsIcon} />
          </a>
        </header>
      </div>
    </>
  );
}

export default Header;
