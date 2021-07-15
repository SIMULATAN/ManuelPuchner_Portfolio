import CookieConsent from "react-cookie-consent";

import styles from "./Notification.module.scss";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";




function Notification() {
  return (
    <CookieConsent
      debug={true}
      disableStyles={true}
      containerClasses={styles.notification}
      buttonClasses={styles.understandButton}

      buttonText="OK"
    >


      <h3>Diese Seite ist derzeit noch in Bearbeitung</h3>
    </CookieConsent>
  );
}

export default Notification;
