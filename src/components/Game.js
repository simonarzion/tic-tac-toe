import React from "react";
import { useState } from "react";
import { Board } from "./Board";
import { GameInfo } from "./GameInfo";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Game = () => {
  const [turns, setTurns] = useState(false);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const current = historyCopy[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = turns ? "O" : "X";

    setTurns(!turns);
    setHistory([...historyCopy, squares]);
    setStepNumber(historyCopy.length);
  };

  const goToMove = (step) => {
    setStepNumber(step);
  };

  const renderMoves = () =>
    history.map((step, move) => {
      let text;

      if (move) {
        text = `Go to move ${move}`;
      } else {
        if (winner) {
          text = `New game`;
        } else {
          text = `Go to start`;
        }
      }

      return (
        <li key={move}>
          <button onClick={() => goToMove(move)}>{text}</button>
        </li>
      );
    });

  return (
    <>
      <Board handleClick={handleClick} squares={history[stepNumber]} />
      <GameInfo winner={winner} turns={turns} renderMoves={renderMoves} />
    </>
  );
};

export default Game;
