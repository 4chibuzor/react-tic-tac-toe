import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App(props) {
  const { WINNING_NUMBERS } = props;
  const [boardData, setBoardData] = useState(props.boardData);
  const [changeTurn, setChangeTurn] = useState({
    isAiTurn: false,
    player: "O",
    selectedCell: null,
  });

  const availableSquare = () => {
    const emptyCells = boardData.reduce(
      (acc, row) =>
        acc.concat(
          row.filter((cell) => cell.isClicked === false).map((cell) => cell.id)
        ),
      []
    );
    return emptyCells;
  };

  const isAvailableSquare = () => {
    const emptyCells = availableSquare();
    if (emptyCells.length) {
      return true;
    }
    return false;
  };

  const handleClickCell = (id, newValue) => {
    if (!checkWin() && isAvailableSquare()) {
      const updateBoardData = boardData.map((row) => {
        return row.map((cell) => {
          if (cell.id === id && !cell.isClicked) {
            return {
              ...cell,
              value: newValue,
              isClicked: !cell.isClicked,
            };
          }
          return cell;
        });
      });
      setChangeTurn((prev) => ({
        ...prev,
        isAiTurn: !changeTurn.isAiTurn,
        player: newValue,
        selectedCell: id,
      }));
      setBoardData(updateBoardData);
    } else {
      //end the game if there was no winner
      endGame(null, null);
    }
  };

  const checkWin = () => {
    let gameWon = null;
    const player = changeTurn.player;
    const selectedCells = boardData.reduce(
      (a, c) =>
        a.concat(
          c.filter((cell) => cell.value === player).map((cell) => cell.id)
        ),
      []
    );
    for (let [index, win] of WINNING_NUMBERS.entries()) {
      if (win.every((elem) => selectedCells.indexOf(elem) > -1)) {
        gameWon = { index, player };
        break;
      }
    }
    return gameWon;
  };

  const computerRandomMove = () => {
    if (changeTurn.isAiTurn) {
      const availableCells = availableSquare();
      const randomMove = Math.floor(Math.random() * availableCells.length);
      const aiPlayer = "X";
      handleClickCell(availableCells[randomMove], aiPlayer);
    }
    return null;
  };

  const endGame = (message, player) => {
    if (player === "O") {
      message = "Hurray! You Won";
    } else if (!player) {
      message = "Game Tie!";
      [...document.getElementsByTagName("td")].forEach(
        (a) => (a.style.backgroundColor = "steelblue")
      );
    } else {
      message = "Oops! You loose";
    }
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = message;
  };

  return (
    <section>
      <Board
        boardData={boardData}
        onClickCell={handleClickCell}
        WINNING_NUMBERS={WINNING_NUMBERS}
        checkWin={checkWin}
        computerRandomMove={computerRandomMove}
        endGame={endGame}
      />
      <div className="endgame">
        <div className="text"></div>
      </div>
    </section>
  );
}

export default App;
