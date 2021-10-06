import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.scss";

function ImageSlider({ images }) {
  const slideTo = (index, e) => {
    let imageItems = document.querySelectorAll("[data-imagenumber]")
    imageItems.forEach((image) => {
      image.style.left = `-${index * (image.clientWidth + 10)}px`
    });
  };
  return (
    <>
      <div className={styles.ImageSlider}>
        {images.map((image, index) => {
          return (
            <div
              key={index}
              data-imagenumber={index}
              className={styles.pictureWrapper}
            >
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
              defaultChecked={index == 0}
              onClick={() => slideTo(index)}
            />
            <label htmlFor={index}></label>
          </div>
        ))}
      </form>
    </>
  );
}

export default ImageSlider;
