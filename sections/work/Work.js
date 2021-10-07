import ImageSlider from "../../components/imageslider/ImageSlider";
import { FiChevronRight } from "react-icons/fi";
import styles from "./Work.module.scss";

function Work() {
  const images = [
    {
      src: "/NotizApp.png",
      alt: "Notiz App",
    },
    {
      src: "/NotizAppGitHub.png",
      alt: "GitHub von Notiz App",
    },
  ];
  const openButtonLink = (e) => {
    window.open(e.target.getAttribute("href"), "_blank");
  };
  return (
    <div id="work" className={styles.work}>
      <h2 className={styles.workHeader}>Some of my Work</h2>
      <p>Note: These are just placeholder images</p>
      <div className={styles.flexWrapper}>
        <ImageSlider images={images} />
        <div className={styles.text}>
          <h2>ToDo List App</h2>
          <p>Here I tested to connect to mongodb with the nextjs framework</p>

          <div className={styles.links}>
            <button
              href="http://manuelpuchner.ddns.net:3000"
              onClick={openButtonLink}
            >
              View Demo <FiChevronRight className={styles.buttonIcon} />
            </button>
            <button
              href="https://github.com/ManuelPuchner/test-mern-app"
              onClick={openButtonLink}
            >
              Visit the GitHub repo <FiChevronRight className={styles.buttonIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
