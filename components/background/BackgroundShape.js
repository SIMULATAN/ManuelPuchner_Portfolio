import styles from "./BackgroundShape.module.scss";

function backgroundShape({ id }) {
  return <div className={styles.shape} id={id}></div>;
}

export default backgroundShape;
