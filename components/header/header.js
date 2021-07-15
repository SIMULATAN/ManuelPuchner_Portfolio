import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCog } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import styles from "./Header.module.scss";

function Header({ children }) {
  return (
    <>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <h1>ManuelP</h1>

          {children}

          <button className={styles.settingsButton}>
            <FontAwesomeIcon className={styles.settingsIcon} icon={faCog} />
          </button>
        </header>
      </div>
    </>
  );
}

export default Header;
