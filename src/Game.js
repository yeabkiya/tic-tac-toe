import React, { useState } from 'react';
import GameGrid from './GameGrid';
import './styles.css'; // Optional CSS for overall game styling

function Game() {
  const [moves, setMoves] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  function gridClick(whichSquare) {
    if (moves[whichSquare] === "" && !winner) {
      const movesCopy = [...moves];
      movesCopy[whichSquare] = turn;
      setMoves(movesCopy);
      setTurn(turn === "X" ? "O" : "X");

      const winningPlayer = checkWinner(movesCopy);
      if (winningPlayer) {
        setWinner(winningPlayer);
      } else if (movesCopy.every((move) => move !== "")) {
        setWinner("Tie");
      }
    }
  }

  function newGame() {
    setMoves(Array(9).fill(""));
    setTurn("X");
    setWinner(null);
  }

  function checkWinner(moves) {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
        return moves[a];
      }
    }
    return null;
  }

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <GameGrid moves={moves} click={gridClick} />
      <div className="game-info">
        {winner ? (
          <h2>{winner === "Tie" ? "It's a Tie!" : `Winner: ${winner}`}</h2>
        ) : (
          <h2>Turn: {turn}</h2>
        )}
        <button onClick={newGame}>New Game</button>
      </div>
    </div>
  );
}

export default Game;
