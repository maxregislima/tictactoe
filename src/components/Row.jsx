import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export default function Row({ player, nextPlayer, line, play }) {
  const [labelList, setLabelList] = React.useState(Array(3).fill(null));

  function handleClick(ix) {
    const newLabelList = [...labelList];
    newLabelList[ix] = player;
    setLabelList(newLabelList);
    play({ player, line, column: ix });
    nextPlayer();
  }

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      style={{ marginBottom: 20 }}
    >
      {[0, 1, 2].map((value, ix) => (
        <Grid key={value} item>
          <Button
            sx={{
              height: 100,
              width: 100,
            }}
            variant="outlined"
            onClick={() => handleClick(ix)}
            disabled={labelList[ix] !== null}
          >
            {labelList[ix] !== null ? (
              labelList[ix] === "x" ? (
                <CloseOutlinedIcon />
              ) : (
                <CircleOutlinedIcon />
              )
            ) : null}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
