import { useState } from "react";

import styles from "./SocialsSidebar.module.scss";

import { FiInstagram, FiGithub, FiTwitter } from "react-icons/fi";

function SocialsSidebar() {
  const [position, setPosition] = useState("left");
  return (
    <aside
      className={styles.socialsSidebar}
      id={position == "left" ? styles.left : styles.right}
    >
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
