import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import GamePlay from "./components/GamePlay";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const gamePlay = () => {
    setGameStarted((prev) => !prev);
  };
  return (
    <>
      <div>{gameStarted ? <GamePlay /> : <Home toggle={gamePlay} />}</div>
    </>
  );
}

export default App;
