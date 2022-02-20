import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Row from "./Row";

const player1 = "x";
const player2 = "o";

export default function Area() {
  const [currentPlayer, SetCurrentPlayer] = useState(player1);
  const [match, setMatch] = useState(Array(3).fill(Array(3).fill(null)));

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

  React.useEffect(() => console.log(match), [match]);

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

*/
