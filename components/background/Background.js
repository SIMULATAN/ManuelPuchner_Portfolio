import { useState, useEffect } from "react";

import styles from "./Background.module.scss";
import shapestyles from "./BackgroundShape.module.scss";

import Parallax from "../parallax/Parallax";
function Background() {
  const shapecolors = [
    "rgb(36, 35, 41)",
    "rgb(70, 69, 74)",
    "rgb(251, 251, 255)",
    "rgb(21, 20, 24)",
    "rgb(245, 245, 255)",
  ];

  const [height, setHeight] = useState(0);
  var counter = 0;
  useEffect(() => {
    setHeight(document.getElementById("__next").offsetHeight);
    const handleResize = () => {
      if (counter % 5 === 0) {
        setHeight(document.getElementById("__next").offsetHeight);
      }
      counter++;
    }
    handleResize()
    const resizeObserver = new ResizeObserver((entries) => {
      handleResize()
    });
    resizeObserver.observe(document.body);
  }, [counter]);

  return (
    <div className={styles.bgWrapper} style={{ height: height }}>
      <div className={styles.bg}>
        {/* big shapes */}
        <BackgroundShape id={shapestyles._1} />
        <BackgroundShape id={shapestyles._2} />
        <BackgroundShape id={shapestyles._3} />

        {/* smaller shapes */}
        <Parallax>
          <BackgroundShape id={shapestyles._4} parallaxScale />
          <BackgroundShape id={shapestyles._5} parallaxScale />
          <BackgroundShape id={shapestyles._6} parallaxScale />
          <BackgroundShape id={shapestyles._7} parallaxScale />
          <BackgroundShape id={shapestyles._8} parallaxScale />
        </Parallax>

        <BackgroundShape id={shapestyles._9} />
      </div>
    </div>
  );
}
function BackgroundShape({ id, parallaxScale }) {
  return (
    <div
      className={`${shapestyles.shape} ${
        parallaxScale && shapestyles.parallaxScale
      }`}
      id={id}
    ></div>
  );
}
export default Background;
