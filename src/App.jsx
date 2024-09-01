import GameBoard from "./components/GameBoard"
import PlayerInfo from "./components/playerInfo"
import { useState } from "react"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combination"
import GameOver from "./components/GameOver"

const initialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];



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
  
  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
      const {cell, player} = turn;
      const {row, col} = cell;

      gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol ===thirdSquareSymbol){
        winner =  firstSquareSymbol;
    }
    }

  

  const hasDraw = gameTurns.length === 9 && !winner;


  function selectSquareHandler(rowIndex, colIndex) {

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
        {(winner || hasDraw)? <GameOver winner={winner}/>: null}
        <GameBoard 
          onSelectSquare={selectSquareHandler}
          board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
