import { useEffect, useState } from "react";

export default function Gameplay({
  setWinningPlayer,
  setReadyToPlay,
  maxScore,
  playerOne,
  setPlayerOne,
  playerTwo,
  setPlayerTwo,
}) {
  const pointsForGin = 25;

  function checkForWinner() {
    if (playerOne.score >= maxScore) {
      setWinningPlayer(playerOne.name);
      setReadyToPlay(false);
    } else if (playerTwo.score >= maxScore) {
      setWinningPlayer(playerTwo.name);
      setReadyToPlay(false);
    }
    return;
  }

  useEffect(() => {
    checkForWinner();
  }, [playerOne.score, playerTwo.score]);

  function PlayerCard({ player, setPlayer }) {
    const [gin, setGin] = useState(false);

    function GinButton() {
      return (
        <button
          type="button"
          onClick={() => {
            setGin(true);
          }}
        >
          Gin!
        </button>
      );
    }

    function GinCard() {
      const [additionalPoints, setAdditionalPoints] = useState(0);

      function handleClick() {
        const pointsToAdd = pointsForGin + additionalPoints;
        const newScore = player.score + pointsToAdd;
        const name = player.name;
        const newPlayerObject = {
          name: name,
          score: newScore,
        };
        setPlayer(newPlayerObject);
        setGin(false);
      }

      return (
        <div>
          <label htmlFor="additionalPoints">
            Points in addition to gin:
            <input
              type="number"
              name="points"
              id="points"
              value={additionalPoints}
              onChange={(e) => setAdditionalPoints(Number(e.target.value))}
            />
          </label>
          <button type="button" onClick={handleClick}>
            Collect my points!
          </button>
        </div>
      );
    }

    return (
      <div>
        <span>
          Player: <strong>{player.name}</strong>
        </span>
        <span>
          Score: <strong>{player.score}</strong>
        </span>
        {gin ? <GinCard /> : <GinButton />}
      </div>
    );
  }

  return (
    <>
      <div id="players">
        <span>
          <strong>Playing to: {maxScore}</strong>
        </span>
        <PlayerCard player={playerOne} setPlayer={setPlayerOne}></PlayerCard>
        <PlayerCard player={playerTwo} setPlayer={setPlayerTwo}></PlayerCard>
      </div>
    </>
  );
}
