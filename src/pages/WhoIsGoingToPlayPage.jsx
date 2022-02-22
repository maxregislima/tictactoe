import React from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

function WhoIsGoingToPlayPage({ setShowPage }) {
  const [option, setOption] = React.useState(null);

  return (
    <Paper
      elevation={3}
      style={{
        minWidth: 650,
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormControl style={{ padding: 20 }}>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          style={{ padding: 30, textAlign: "center", fontWeight: 500 }}
        >
          Who is going to play?
        </Typography>
        <RadioGroup
          onChange={(el) => {
            setOption(el.currentTarget.value);
          }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormControlLabel
            value="twoPlayers"
            control={<Radio />}
            label="Player 1 vs Player 2"
          />
          <FormControlLabel
            value="onePlayer"
            control={<Radio />}
            label="Player vs Computer"
          />
        </RadioGroup>
        <Button
          style={{ marginTop: 40 }}
          variant="contained"
          size="large"
          onClick={() => setShowPage("PlayersName")}
        >
          {option === "onePlayer" ? `Good luck!` : `Continue`}
        </Button>
      </FormControl>
    </Paper>
  );
}

export default WhoIsGoingToPlayPage;
