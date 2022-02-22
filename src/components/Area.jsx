import React from "react";
import Grid from "@mui/material/Grid";
import Row from "./Row";

const player1 = "x";
const player2 = "o";

export default function Area() {
  const [currentPlayer, SetCurrentPlayer] = React.useState(player1);
  const [match, setMatch] = React.useState(Array(3).fill(Array(3).fill(null)));
  // const [match, setMatch] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = React.useState(false)

  const nextPlayer = () => {
    SetCurrentPlayer((prevCurrentPlayer) =>
      prevCurrentPlayer === player1 ? player2 : player1
    );
  };

  const play = ({ player, line, column }) => {
    let newMatch = [[...match[0]], [...match[1]], [...match[2]]];
    newMatch[line][column] = player;
    setMatch(newMatch);
  };

  // const play = ({ player, position }) => {
  //   let newMatch = [...match];
  //   newMatch[position] = player;
  //   setMatch(newMatch);
  // };

  React.useEffect(() => {
    console.log(match);

    function endOfTheGame() {
      if (
        (match[0][0] === match[0][1] &&
          match[0][0] === match[0][2] &&
          (match[0][0] === "x" || match[0][0] === "o")) ||
        (match[1][0] === match[1][1] &&
          match[1][0] === match[1][2] &&
          (match[1][0] === "x" || match[1][0] === "o")) ||
        (match[2][0] === match[2][1] &&
          match[2][0] === match[2][2] &&
          (match[2][0] === "x" || match[2][0] === "o")) ||
        (match[0][0] === match[1][0] &&
          match[0][0] === match[2][0] &&
          (match[0][0] === "x" || match[0][0] === "o")) ||
        (match[0][1] === match[1][1] &&
          match[0][1] === match[2][1] &&
          (match[0][1] === "x" || match[0][1] === "o")) ||
        (match[0][2] === match[1][2] &&
          match[0][2] === match[2][2] &&
          (match[0][2] === "x" || match[0][2] === "o")) ||
        (match[0][0] === match[1][1] &&
          match[0][0] === match[2][2] &&
          (match[0][0] === "x" || match[0][0] === "o")) ||
        (match[2][0] === match[1][1] &&
          match[2][0] === match[0][2] &&
          (match[2][0] === "x" || match[2][0] === "o"))
      ) {
        // quem ganhou
        console.log("quem ganhou?");
        if (
          (match[0][0] === "o" && match[0][1] === "o" && match[0][2] === "o") ||
          (match[1][0] === "o" && match[1][1] === "o" && match[1][2] === "o") ||
          (match[2][0] === "o" && match[2][1] === "o" && match[2][2] === "o") ||
          (match[0][0] === "o" && match[1][0] === "o" && match[2][0] === "o") ||
          (match[0][1] === "o" && match[1][1] === "o" && match[2][1] === "o") ||
          (match[0][2] === "o" && match[1][2] === "o" && match[2][2] === "o") ||
          (match[0][0] === "o" && match[1][1] === "o" && match[2][2] === "o") ||
          (match[2][0] === "o" && match[1][1] === "o" && match[0][2] === "o")
        ) {
          // jogador que ganhou foi `o`
          console.log("jogador que ganhou foi `o`");
        } else {
          console.log("jogador que ganhou foi `x`");
        }
        setGameOver(true)
      } else {
        if (
          match[0][0] !== null &&
          match[0][1] !== null &&
          match[0][2] !== null &&
          match[1][0] !== null &&
          match[1][1] !== null &&
          match[1][2] !== null &&
          match[2][0] !== null &&
          match[2][1] !== null &&
          match[2][2] !== null 
        ) {
          // fim de jogo
          // jogou acabou
          console.log("jogou acabou");
          setGameOver(true)
        }
      }
    }

    endOfTheGame();
  }, [match]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {Array(3)
          .fill(null)
          .map((_, ix) => (
            <Row
              player={currentPlayer}
              nextPlayer={nextPlayer}
              key={ix}
              line={ix}
              play={play}
              status={gameOver}
            />
          ))}
      </Grid>
    </Grid>
  );
}

/*

00 01 02
10 11 12
20 21 22

00 10 20
01 11 21 
02 12 22

00 11 22 
20 11 02

0 1 2 
3 4 5
6 7 8

0 3 6
1 4 7
2 5 8

0 4 8
2 4 6

*/
