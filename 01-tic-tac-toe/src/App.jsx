import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./compoents/Square"
import { TURNS } from "./constants"
import { checkWinnerFrom, checkEndGame } from "./logic/board"
import { WinnerModal } from "./compoents/WinnerModal"

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, SetTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)  // null es que no hay ganador y false es que hay un empate

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    SetTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }


  const updateBoard = (index) => {
    // No actualizamos la posición si ya hay un elemento en ella o si ya hay un ganador
    if (board[index] || winner) return 

    // Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn 
    setBoard(newBoard)

    // Cambiar el tablero
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    SetTurn(newTurn)

    // Guardar aqui la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    // Revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)  // Empate
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>

      <section className="game">
        {
          board.map((square, index) => {
            {/* Renderizamos el index q el es q nos ayuda a crear el tablero */}
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>   
            )
          })
        }
      </section>

      <section className="turn">
        <Square
          isSelected={turn === TURNS.X}
        >
          {TURNS.X}
        </Square>
        <Square
          isSelected={turn === TURNS.O}
        >
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal 
        winner={winner}
        resetGame={resetGame}
      />
      
    </main>
  )
}

export default App
