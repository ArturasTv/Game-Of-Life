import styles from "./App.module.scss";
import Game from "./components/game/Game";

function App() {
  return (
    <div className={styles["App-center"]}>
      <Game />
    </div>
  );
}

export default App;
