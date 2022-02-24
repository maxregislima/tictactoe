import React from "react";
import { Grid } from "@mui/material";
import { red, indigo } from "@mui/material/colors";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

function Game({ match, style }) {

  const key = Math.round(Math.random() * 100000);

  const line1 = match[0]
  const line2 = match[1]
  const line3 = match[2]

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ ...style }}
    >
        <Grid item xs={3}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 2 }}
            sx={{ maxWidth: 200, paddingLeft: 2 }}
          >
            {line1.concat(line2, line3).map((xo, ix) => (
                <Grid
                  key={`game-${key}-${ix}`} 
                  item
                  xs={4}
                  sx={{
                    width: 30,
                    height: 30,
                    border: 1,
                    borderColor: "lightgray",
                  }}
                  style={{ paddingLeft: 9, marginBottom: 2 }}
                >
                  {xo === "x" ? (
                    <CloseOutlinedIcon sx={{ fontSize: 17, color: indigo[900] }} />
                  ) : xo === "o" ? (
                    <CircleOutlinedIcon sx={{ fontSize: 17, color: red[900] }} />
                  ) : null}
                </Grid>
              ))}
          </Grid>
        </Grid>
    </Grid>
  );
}

export default Game;
