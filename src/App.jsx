import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" playerSymbol="X"></Player>
          <Player initialName="Player 2" playerSymbol="O"></Player>
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
