import styles from "./About.module.scss";

function About() {
  return (
    <div id="about">
      <div className={styles.about}>
        <div className={styles.textWrapper}>
          <h1>Hi, I&apos;m Manuel</h1>
          <h2>Developer and Photographer</h2>
        </div>
        <div className={styles.pictureWrapper}></div>
      </div>
    </div>
  );
}

export default About;
