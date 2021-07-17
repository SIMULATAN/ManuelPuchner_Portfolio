import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./About.module.scss";

function About() {

  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    // changing the opacity based on the scrollposition
    const aboutSection = document.getElementById("about");
    window.addEventListener("scroll", () => {
      let scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollPos < 550) {
        setOpacity(1 - scrollPos / aboutSection.offsetHeight);
      }
    });

    // on unmount
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div id="about" style={{opacity: opacity}}>
      <div className={styles.about}>
        <div className={styles.textWrapper}>
          <h1>Hi, I&apos;m Manuel</h1>
          <h2>Developer and Photographer</h2>
          <p>I&apos;m 15 years old and currently attending HTL-Leonding</p>
          <p>Currently, I&apos;m learning React and Next.js</p>
          <p>At the moment trying ro improve my coding skills . . .</p>
        </div>
        <div className={styles.pictureWrapper}>
          <Image
            src="/me.png"
            alt="me"
            layout="fill"
            className={styles.img}
          ></Image>
          {/* hier noch nen farbigen hintergrund hinzufügen */}
        </div>
      </div>
    </div>
  );
}

export default About;
