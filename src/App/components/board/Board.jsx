import styles from "./Board.module.scss";
import Cell from "../cell/Cell";

const Board = ({ board, updateCell }) => {
  return (
    <div className={styles["board"]}>
      {board.map((innerArray, row) => (
        <>
          {innerArray.map((_, col) => (
            <Cell
              row={row}
              col={col}
              active={board[row][col]}
              updateCell={updateCell}
            />
          ))}
        </>
      ))}
    </div>
  );
};

export default Board;
