import React from 'react';
import Square from './Square';

function GameGrid({ moves, click }) {
  return (
    <div id="game-grid">
      {moves.map((move, index) => (
        <Square key={index} player={move} click={() => click(index)} />
      ))}
    </div>
  );
}

export default GameGrid;
