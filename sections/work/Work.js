import ImageSlider from "../../components/imageslider/ImageSlider";

import styles from "./Work.module.scss";

function Work() {
  const images = [
    {
      src: "https://picsum.photos/1920/1080",
      alt: "me",
    },
    {
      src: "https://picsum.photos/1921/1000",
      alt: "me",
    },
    {
      src: "https://picsum.photos/1922/1098",
      alt: "me",
    },
    {
      src: "https://picsum.photos/1923/1083",
      alt: "me",
    },
  ];
  return (
    <div id="work" className={styles.work}>
      <h2 className={styles.workHeader}>Some of my Work</h2>
      <p>Note: These are just placeholder images</p>
      <ImageSlider images={images} />
    </div>
  );
}

export default Work;
