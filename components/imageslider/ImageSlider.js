import Image from "next/image";

import styles from "./ImageSlider.module.scss";

function ImageSlider({ images }) {
  const test = (e) => {
    console.log(e.target);
  }
  
  return (
    <>
      <div className={styles.ImageSlider}>
        {images.map((image, index) => {
          return (
            <div key={index} className={styles.pictureWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                className={styles.image}
              />
            </div>
          );
        })}
      </div>
      <form className={styles.controls}>
        {images.map((image, index) => (
          <div key={index}>
            <input
              type="radio"
              id={index}
              name="picture-select"
              onClick={test}
            />
            <label htmlFor={index}></label>
          </div>
        ))}
      </form>
    </>
  );
}

export default ImageSlider;
