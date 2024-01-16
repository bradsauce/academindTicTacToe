import Player from './components/Player';
//import GameBoard from './components/GameBoard';
import GameBoard1 from './components/GameBoard1';
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
        <GameBoard1 />
      </div>
    </main>
  )
}

export default App
