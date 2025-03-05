export default function IntroPage({
  winningPlayer,
  readyToPlay,
  setReadyToPlay,
  maxScore,
  setMaxScore,
  playerOne,
  setPlayerOne,
  playerTwo,
  setPlayerTwo,
}) {
  function handleClick() {
    setReadyToPlay(true);
  }

  function handleNameChange(e, player, setPlayer) {
    const newName = e.target.value;
    const score = player.score;
    const newPlayerObject = {
      name: newName,
      score: score,
    };
    setPlayer(newPlayerObject);
  }

  function WinningPlayerDisplay() {
    if (winningPlayer) {
      return <h1>{winningPlayer} won!</h1>;
    }
  }

  if (!readyToPlay) {
    return (
      <>
        <WinningPlayerDisplay />
        <form action="">
          <label htmlFor="playerOne">
            Player One Name:
            <input
              type="text"
              name="playerOne"
              id="playerOne"
              value={playerOne.name}
              onChange={(e) => {
                handleNameChange(e, playerOne, setPlayerOne);
              }}
            />
          </label>
          <label htmlFor="playerTwo">
            Player Two Name:
            <input
              type="text"
              name="playerTwo"
              id="playerTwo"
              value={playerTwo.name}
              onChange={(e) => {
                handleNameChange(e, playerTwo, setPlayerTwo);
              }}
            />
          </label>
          <label htmlFor="maxScore">
            Playing To:
            <input
              type="number"
              name="maxScore"
              id="maxScore"
              value={maxScore}
              onChange={(e) => setMaxScore(e.target.value)}
            />
          </label>
          <button type="button" onClick={handleClick}>
            Start the game!
          </button>
        </form>
      </>
    );
  }
}
