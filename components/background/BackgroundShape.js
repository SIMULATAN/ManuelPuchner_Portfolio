import styles from "./BackgroundShape.module.scss";

function BackgroundShape({ id }) {
  return <div className={styles.shape} id={id}></div>;
}

export default BackgroundShape;
