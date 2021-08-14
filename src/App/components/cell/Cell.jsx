import styles from "./Cell.module.scss";

const Cell = ({ row, col, updateCell, active }) => {
  return (
    <div
      onClick={() => updateCell(row, col)}
      className={!active ? styles["dead-cell"] : styles["alive-cell"]}
    />
  );
};

export default Cell;
