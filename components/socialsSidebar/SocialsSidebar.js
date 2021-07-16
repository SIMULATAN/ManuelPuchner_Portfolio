import { useState, useEffect } from "react";

import styles from "./SocialsSidebar.module.scss";

import { FiInstagram, FiGithub, FiTwitter } from "react-icons/fi";

function SocialsSidebar() {
  const [style, setStyle] = useState({
    left: "1.5rem",
    right: "unset",
    opacity: 1,
  });

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

    var scrollPos =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollPos > 490 && scrollPos < 510) {
      setStyle({
        left: "1.5rem",
        right: "unset",
        opacity: 0,
      });
    } else if (scrollPos > 510) {
      setStyle({
        left: "unset",
        right: "1.5rem",
        opacity: 1,
      });
    } else {
      setStyle({
        left: "1.5rem",
        right: "unset",
        opacity: 1,
      });
    }
  };
  return (
    <aside className={styles.socialsSidebar} style={style}>
      <ul>
        <li>
          <a
            href="https://instagram.com/manuelpuchner_"
            rel="noreferrer"
            target="_blank"
          >
            <FiInstagram className={styles.socialIcon} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/manuelpuchner"
            rel="noreferrer"
            target="_blank"
          >
            <FiGithub className={styles.socialIcon} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/manuelpuchner_"
            rel="noreferrer"
            target="_blank"
          >
            <FiTwitter className={styles.socialIcon} />
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default SocialsSidebar;
