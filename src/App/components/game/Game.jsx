import styles from "./Game.module.scss";
import Board from "../board/Board";
import { useState, useEffect } from "react";
import { makeBoard, cols, rows, countNeighbours } from "../../utils";
import StartWindow from "../start-window/Start-window.jsx";

const Game = () => {
  const [isStarted, setIsStarted] = useState(false);
  const onStart = () => {
    setIsStarted(true);
  };
  useEffect(() => {
    let interval;
    window.addEventListener("keypress", (e) => {
      interval = setInterval(() => {
        if (e.key === " ") updatingGame();
      }, 100);
    });
    return () => clearInterval(interval);
  }, []);

  const [board, setboard] = useState(makeBoard());
  const updateCell = (row, col) => {
    let copy = [...board];
    copy[row][col] = !copy[row][col];
    setboard(copy);
  };
  const updatingGame = () => {
    let register = [];
    for (let i = 1; i < cols - 1; i++) {
      for (let j = 1; j < rows - 1; j++) {
        const temp = countNeighbours(i, j, board);
        register.push({ state: board[i][j], i, j, counter: temp });
      }
    }
    let copy = [...board];

    for (let i = 0; i < register.length; i++) {
      if (
        register[i].state &&
        (register[i].counter == 2 || register[i].counter == 3)
      ) {
        copy[register[i].i][register[i].j] = true;
        continue;
      }
      if (!register[i].state && register[i].counter == 3) {
        copy[register[i].i][register[i].j] = true;
        continue;
      }
      copy[register[i].i][register[i].j] = false;
    }

    setboard(copy);
  };
  return isStarted ? (
    <Board board={board} updateCell={updateCell} />
  ) : (
    <StartWindow onStart={onStart} />
  );
};

export default Game;
