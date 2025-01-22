import React from "react";

interface Books {
  id: number;
  name: string;
}

const GameGrid = () => {
  return (
    <ul>
      <li>The Almanack of Naval Ravikant</li>
      <li>Private Equity: A Memoir</li>
    </ul>
  );
};

export default GameGrid;
