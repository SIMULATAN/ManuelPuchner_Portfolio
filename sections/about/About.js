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
          <svg
            id={styles.bg}
            data-name="bg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 275.91 315.78"
          >
            <path
              className="cls-1"
              d="M522.11,238.37a136.51,136.51,0,0,0-25.06,6.53c-8.84,3.36-11.06,5.43-20.71,8.36s-11.39,2-15.26,4.72c-6.66,4.65-10.2,13.23-10.53,20.71-.48,10.83,6.05,13.27,9.08,26.15,1.89,8-.29,8.56-1.82,29.79-1.47,20.49-2.11,31,2.55,42.13,2.24,5.38,2.58,3.59,9.08,15.62,8.62,16,12.93,24,10.9,29.43-2.72,7.3-12.24,6.21-29.43,13.8-5.68,2.51-21.26,9.39-32.33,21.8-11.22,12.58-23.25,37-14.16,57.39,6,13.52,18.9,20,28.33,24.7s17.94,6.68,36.33,9.08c22.59,2.95,36.27,4.73,59.52,4.88,20.76.13,41.53.25,68.34-4.51,33.84-6,60.26-10.72,73-31.61,1.56-2.54,10-16.44,6.18-32-.51-2.05-2.46-9-13.81-20.71-18-18.52-39.32-28-46.13-30.87-18.82-7.91-28.53-7.87-30.87-15.62-2.06-6.79,3-14.67,6.9-20.71,7.15-11.12,11.18-9,15.62-16.71,8.22-14.25-3.41-25.31,5.45-45,2.41-5.38,3.28-4.57,5.08-9.45,5.74-15.49-.39-30.78-2.18-35.23-7-17.4-20.39-26.46-31.24-33.78C576.74,251.71,550.74,234.15,522.11,238.37Z"
              transform="translate(-401.22 -237.72)"
            />
          </svg>
          <Image
            src="/me2.png"
            alt="me"
            layout="fill"
            className={styles.img}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default About;
