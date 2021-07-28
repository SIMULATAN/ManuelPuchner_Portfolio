import ImageSlider from "../../components/imageslider/ImageSlider";

import styles from "./Work.module.scss";

function Work() {
  const images = [
    {
      src: "/me.png",
      alt: "me",
    },
  ];
  return (
    <div id="work" className={styles.work}>
      <h2 className={styles.workHeader}>Some of my Work</h2>
      <ImageSlider images={images} />
    </div>
  );
}

export default Work;
