import styles from "./Background.module.scss";
import shapestyles from "./BackgroundShape.module.scss";
import BackgroundShape from "./BackgroundShape";

function background() {
  const shapecolors = [
    "rgb(36, 35, 41)",
    "rgb(70, 69, 74)",
    "rgb(251, 251, 255)",
    "rgb(21, 20, 24)",
    "rgb(245, 245, 255)",
  ];

  
  return (
    <div className={styles.bgWrapper}>
      <div className={styles.bg}>
        {/* big shapes */}
        <BackgroundShape id={shapestyles._1} />
        <BackgroundShape id={shapestyles._2} />
        <BackgroundShape id={shapestyles._3} />

        {/* smaller shapes */}
        <BackgroundShape id={shapestyles._4} />
        <BackgroundShape id={shapestyles._5} />
        <BackgroundShape id={shapestyles._6} />
        <BackgroundShape id={shapestyles._7} />
        <BackgroundShape id={shapestyles._8} />
        <BackgroundShape id={shapestyles._9} />
      </div>
    </div>
  );
}

export default background;
