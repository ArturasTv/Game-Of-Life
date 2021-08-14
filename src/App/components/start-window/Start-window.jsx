import styles from "./Start-window.module.scss";

const StartWindow = ({ onStart }) => {
  return (
    <div className={styles["main-window"]}>
      <h1>Conway's Game of Life</h1>
      <div className={styles["helper"]}>
        Norint pradėti gyvenimą spauskite "Space"
      </div>

      <div onClick={() => onStart()} className={styles["start"]}>
        Pradėti
      </div>
    </div>
  );
};

export default StartWindow;
