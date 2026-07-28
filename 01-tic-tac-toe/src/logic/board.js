import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
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

  export const checkEndGame = (newBoard) => {
    /**Revisamos el empate si no hay más espacios vacíos en el tablero */
    return newBoard.every((square) => square !== null)  // Cada cuadrado será X u O
  }