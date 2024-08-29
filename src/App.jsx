import PlayerInfo from "./components/playerInfo"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo
            names='player1'
            symbol='O'/>
          <PlayerInfo
            names='player2'
            symbol='X'/>
        </ol>

        GAME BOARD
      </div>
      LOG
    </main>
  )
}

export default App
