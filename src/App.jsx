import GameBoard from "./components/GameBoard"
import PlayerInfo from "./components/playerInfo"
import { useState } from "react"
import Log from "./components/Log"

function derivedState(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length>0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  
  return currentPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] =useState([]);

  let activePlayer = derivedState(gameTurns);
  
  function selectSquareHandler(rowIndex, colIndex) {
    // code below not optimal because we merge state. 
    // notice we work for setGameTurns but we call activePlayer state
    //   [{cell: {row: rowIndex, col: colIndex}, player: activePlayer},
    // instead we want to compute the values 

    setGameTurns((prevTurns)=> {
      let currentPlayer = derivedState(prevTurns);

      const updatedTurns = [
        {cell: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns,];

      return updatedTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            names='player1'
            symbol='X'
            isActive={activePlayer === 'X'}/>
          <PlayerInfo
            names='player2'
            symbol='O'
            isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard 
          onSelectSquare={selectSquareHandler}
          turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
