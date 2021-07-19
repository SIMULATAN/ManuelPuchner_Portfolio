import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./About.module.scss";

function About() {
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    // changing the opacity based on the scrollposition
    const aboutSection = document.getElementById("about");
    const handleScroll = () => {
      let scrollPos =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollPos < 550) {
        let opacityOffset = 0;
        if(window.innerWidth < 450) {
          opacityOffset = 0.58;
        } else {
          opacityOffset = 0;
        }
        setOpacity(1 - scrollPos / aboutSection.offsetHeight * 1.1 + opacityOffset);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="about"
      style={{
        opacity: opacity,
        paddingTop: "5rem",
        transform: "translateY(-5rem)",
      }}
    >
      <div className={styles.about}>
        <div className={styles.textWrapper}>
          <h1>Hi, I&apos;m Manuel</h1>
          <h2>Developer and Photographer</h2>
          <div className={styles.desktopDescription}>
            <p>I&apos;m 15 years old and currently attending HTL-Leonding</p>
            <p>Currently, I&apos;m learning React and Next.js</p>
            <p>At the moment trying ro improve my coding skills . . .</p>
          </div>

          <div className={styles.mobileDescription}>
            <p>
              I&apos;m 15 years old and currently attending HTL-Leonding.
              Currently, I&apos;m learning React and Next.js. At the moment
              I&apos;m trying to improve my coding skills . . .
            </p>
          </div>
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
