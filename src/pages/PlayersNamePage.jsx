import React from "react";
import {
  Box,
  Button,
  Fab,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { red, indigo } from "@mui/material/colors";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

function PlayersNamePage({ setShowPage, playingMode, SetPlayers }) {
  const [player1, setPlayer1] = React.useState("");
  const [player2, setPlayer2] = React.useState("");

  const player1Ref = React.useRef(null);
  const player2Ref = React.useRef(null);

  React.useEffect(() => {
    SetPlayers({ player1, player2 });
  }, [player1, player2, SetPlayers]);

  React.useEffect(() => {
    console.warn(playingMode);
    if (playingMode === "onePlayer") {
      setPlayer2("Computer");
    }
  }, [playingMode]);

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
        position: "relative",
      }}
    >
      <Fab
        color="default"
        aria-label="back"
        size="small"
        style={{ position: "absolute", top: 20, left: 20 }}
        onClick={() => setShowPage("WhoIsGoingToPlay")}
      >
        <ChevronLeftIcon />
      </Fab>

      <FormControl style={{ padding: 30 }}>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          style={{ padding: 30, textAlign: "center", fontWeight: 500 }}
        >
          Who are you???
        </Typography>

        {/* X */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: 2,
            paddingRight: 3,
          }}
        >
          <CloseOutlinedIcon
            sx={{ color: indigo[900], mr: 1, my: 0.5, fontSize: 30 }}
          />

          <TextField
            autoFocus
            required
            fullWidth
            variant="filled"
            inputRef={player1Ref}
            label="Player 1"
            value={player1}
            onChange={(ev) => setPlayer1(player1Ref.current.value?.trim())}
            inputProps={{ maxLength: 20 }}
          />
        </Box>

        {/* O */}
        <Box sx={{ display: "flex", alignItems: "center", paddingRight: 3 }}>
          <CircleOutlinedIcon
            sx={{ color: red[900], mr: 1, my: 0.5, fontSize: 30 }}
          />
          <TextField
            required
            fullWidth
            variant="filled"
            inputRef={player2Ref}
            label="Player 2"
            value={player2}
            onChange={(ev) => setPlayer2(player2Ref.current.value?.trim())}
            disabled={playingMode === "onePlayer"}
            inputProps={{ maxLength: 20 }}
          />
        </Box>
        <Button
          style={{ marginTop: 40 }}
          variant="contained"
          size="large"
          onClick={() => setShowPage("Area")}
          fullWidth
          disabled={!(player1 !== "" && player2 !== "")}
        >
          start the game
        </Button>
      </FormControl>
    </Paper>
  );
}

export default PlayersNamePage;
