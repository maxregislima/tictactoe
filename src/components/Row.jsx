import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { red, indigo } from "@mui/material/colors";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export default function Row({ player, nextPlayer, line, playFn, gameOver, computerMove }) {
  const [labelList, setLabelList] = React.useState(Array(3).fill(null));

  const handleClick = React.useMemo( () => (column) => {
    const newLabelList = [...labelList];
    newLabelList[column] = player;
    setLabelList(newLabelList);
    playFn({
      player,
      column,
      line,
    });

    nextPlayer();
  }, [labelList, line, nextPlayer, playFn, player])

  let matrix = [0, 1, 2];

  React.useEffect(() => {
    if (gameOver === true) {
      setLabelList(Array(3).fill(null));
    }
  }, [gameOver]);

  React.useEffect(() => {
    if (computerMove && line === computerMove?.line) {
      handleClick(computerMove?.column)
    }
  }, [line, computerMove, handleClick])

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
            disabled={labelList[ix] !== null || gameOver === true}
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
