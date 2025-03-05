import { useState } from "react";
import "./App.css";
import IntroPage from "./Intro";
import Gameplay from "./Gameplay";

function Footer() {
  return <footer>&copy; Andy Ryan 2025</footer>;
}

function App() {
  const [readyToPlay, setReadyToPlay] = useState(false);
  const [maxScore, setMaxScore] = useState(0);
  const [playerOne, setPlayerOne] = useState({ name: "", score: 0 });
  const [playerTwo, setPlayerTwo] = useState({ name: "", score: 0 });
  const [winningPlayer, setWinningPlayer] = useState(false);

  return (
    <>
      <Gameplay
        setWinningPlayer={setWinningPlayer}
        readyToPlay={readyToPlay}
        setReadyToPlay={setReadyToPlay}
        maxScore={maxScore}
        playerOne={playerOne}
        setPlayerOne={setPlayerOne}
        playerTwo={playerTwo}
        setPlayerTwo={setPlayerTwo}
      ></Gameplay>
      <IntroPage
        winningPlayer={winningPlayer}
        readyToPlay={readyToPlay}
        setReadyToPlay={setReadyToPlay}
        maxScore={maxScore}
        setMaxScore={setMaxScore}
        playerOne={playerOne}
        setPlayerOne={setPlayerOne}
        playerTwo={playerTwo}
        setPlayerTwo={setPlayerTwo}
      ></IntroPage>
      <Footer></Footer>
    </>
  );
}

export default App;
