import React from 'react';

function Square({ player, click }) {
  return (
    <button className={player} onClick={click}>
      {player}
    </button>
  );
}

export default Square;
