import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { red, indigo } from "@mui/material/colors";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export default function Row({ player, nextPlayer, line, play, status }) {
  const [labelList, setLabelList] = React.useState(Array(3).fill(null));

  function handleClick(ix) {
    const newLabelList = [...labelList];
    newLabelList[ix] = player;
    setLabelList(newLabelList);
    play({ player, line, column: ix });
    nextPlayer();
  }

  // function handleClick(value, ix) {
  //   const newLabelList = [...labelList];
  //   newLabelList[ix] = player;
  //   setLabelList(newLabelList);
  //   play({ player, position: value });
  //   nextPlayer();
  // }

  //  line === 0
  //  0, 1, 2
  //  line === 1
  //  3, 4, 5
  //  line === 2
  //  6, 7, 8

  let matrix = [0, 1, 2];
  // if (line === 0) {
  //   matrix = [0, 1, 2];
  // } else if (line === 1) {
  //   matrix = [3, 4, 5];
  // } else {
  //   matrix = [6, 7, 8];
  // }

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      style={{ marginBottom: 20 }}
    >
      {matrix.map((value, ix) => (
        <Grid key={value} item>
          <Button
            sx={{
              height: 100,
              width: 100,
            }}
            style={{
              borderColor:
                labelList[ix] === "x"
                  ? indigo[500]
                  : labelList[ix] === "o"
                  ? red[500]
                  : "initial",
            }}
            variant="outlined"
            onClick={() => handleClick(ix)}
            // onClick={() => handleClick(value, ix)}
            disabled={labelList[ix] !== null || status === true}
          >
            {labelList[ix] !== null ? (
              labelList[ix] === "x" ? (
                <CloseOutlinedIcon style={{ color: indigo[900] }} />
              ) : (
                <CircleOutlinedIcon style={{ color: red[900] }} />
              )
            ) : null}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
