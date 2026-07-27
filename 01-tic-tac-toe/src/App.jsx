import { useState } from "react"
import confetti from "canvas-confetti"

const TURNS = {
  X: 'x',
  O: 'o'
}


const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div 
      className={className}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )

  const [turn, SetTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)  // null es que no hay ganador y false es que hay un empate

  const checkWinner = (boardToCheck) => {
    // Revisamos todas las combinaciones ganadores para saber si X u O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // si en la posición 0 hay X u O
        boardToCheck[a] === boardToCheck[b] && // si en las posiciones 0 y 1 hay X u O
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // Ganador
      }
    }
    // Si no hay ganador
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    SetTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    /**Revisamos el empate si no hay más espacios vacíos en el tablero */
    return newBoard.every((square) => square !== null)  // Cada cuadrado será X u O
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

    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
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

      {/* Renderizado condicional */}
      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false 
                    ? 'Empate'
                    : 'Ganó: '
                }
              </h2>

              <header className="win">
                <Square>
                  {winner}
                </Square>
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
// https://www.youtube.com/watch?v=qkzcjwnueLA
//47:18