import React, { useEffect } from "react";

function Row(props) {
  return <tr>{props.children}</tr>;
}

export default function Board(props) {
  const { boardData, onClickCell } = props;
  const humanPlayer = "O";

  const handleClick = ({ target }) => {
    const targetId = parseInt(target.id);
    if (typeof targetId === "number") {
      onClickCell(targetId, humanPlayer);
    }
  };
  const cellClick = () => null;

  useEffect(() => {
    //check if last player move was a win
    const gameWon = props.checkWin();
    if (gameWon) {
      const gameOver = (gameWon) => {
        const { index, player } = gameWon;
        const row = props.WINNING_NUMBERS[index];
        props.endGame(null, player);
        row.forEach((cell) => {
          document.getElementsByTagName("td")[cell].style.backgroundColor =
            "skyblue";
        });
      };
      gameOver(gameWon);
    } else {
      props.computerRandomMove();
    }
  }, [props]);

  const tableRows = boardData.map((row, i) => (
    <Row key={i}>
      {row.map((cell) => (
        <td
          key={cell.id}
          id={cell.id}
          onClick={cell.isClicked ? cellClick : handleClick}
        >
          {cell.value}
        </td>
      ))}
    </Row>
  ));

  return (
    <table disabled={true}>
      <tbody>{tableRows}</tbody>
    </table>
  );
}
