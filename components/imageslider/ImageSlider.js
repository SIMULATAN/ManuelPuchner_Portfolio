import Image from "next/image";

import styles from "./ImageSlider.module.scss";

function ImageSlider({ images }) {
  return (
    <div className={styles.ImageSlider}>
      {images.map((image, index) => {
        return (
          <div key={index} className={styles.pictureWrapper}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              className={styles.img}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider;
