import React from "react";
import Grid from "@mui/material/Grid";
import { red, indigo } from "@mui/material/colors";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import TicTacToe from "../assets/images/Tic_tac_toe.png";
import Row from "./Row";

const player1 = "x";
const player2 = "o";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Area({ setShowPage, players }) {
  const [currentPlayer, SetCurrentPlayer] = React.useState(player1);
  const [match, setMatch] = React.useState(Array(3).fill(Array(3).fill(null)));
  // const [match, setMatch] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = React.useState(false);
  const [winner, setWinner] = React.useState(null);
  const [toogleDialog, setToogleDialog] = React.useState(true);

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
          setWinner("o");
        } else {
          console.log("jogador que ganhou foi `x`");
          setWinner("x");
        }
        setGameOver(true);
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
          setWinner("t");
          setGameOver(true);
        }
      }
    }

    endOfTheGame();
  }, [match]);

  React.useEffect(() => {
    if (gameOver === true) {
      setToogleDialog(true);
    }
  }, [gameOver]);

  const handleCloseDialog = () => setToogleDialog(false);

  const handleDialogYes = () => {
    // SetCurrentPlayer(player1)

    let newMatch = [[null, null, null], [null, null, null], [null, null, null]];
    setMatch(newMatch);

    setGameOver(false);
    setWinner(null);
    setToogleDialog(false);
  };

  const handleDialogNo = () => {
    SetCurrentPlayer(player1)
    setMatch(Array(3).fill(Array(3).fill(null)));
    setGameOver(false);
    setWinner(null);
    setToogleDialog(false);
    setShowPage('Welcome')
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
          >
            <img
              src={TicTacToe}
              alt="Tic-Tac-Toe"
              height={60}
              style={{ paddingRight: 10 }}
            />
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              style={{
                paddingTop: 15,
                fontWeight: 500,
              }}
            >
              Tic-Tac-Toe
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            style={{ marginBottom: 20 }}
          >
            <Grid item sx={5}>
              <Paper
                elevation={3}
                style={{
                  padding: 20,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  backgroundColor:
                    currentPlayer === "x" && !gameOver ? indigo[100] : "white",
                  opacity: winner === "o" || winner === "t" ? 0.1 : 1,
                }}
              >
                {players.player1}
                <CloseOutlinedIcon
                  sx={{ color: indigo[900], ml: 1, my: 0.5, fontSize: 30 }}
                />
              </Paper>
            </Grid>
            <Grid
              item
              sx={2}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              vs
            </Grid>

            <Grid item sx={5}>
              <Paper
                elevation={3}
                style={{
                  padding: 20,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:
                    currentPlayer === "o" && !gameOver ? red[100] : "white",
                  opacity: winner === "x" || winner === "t" ? 0.1 : 1,
                }}
              >
                <CircleOutlinedIcon
                  sx={{ color: red[900], mr: 1, my: 0.5, fontSize: 30 }}
                />
                {players.player2}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
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

      <Dialog
        open={toogleDialog}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={true}
        maxWidth="sm"
        onClose={handleCloseDialog}
        disableEscapeKeyDown
        onBackdropClick={() => false}
      >
        <DialogTitle>Game Over</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>
              {winner !== "t" ? (
                <span>Congratulation! </span>
              ) : (
                <span>Nobody won, it is a tie!</span>
              )}
            </p>

            {winner === "x" ? (
              <strong>{players.player1}</strong>
            ) : winner === "o" ? (
              <strong>{players.player2}</strong>
            ) : null}

            {winner !== "t" ? <span> you won!</span> : null}

            <div>Do you want to play again?</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogYes}>Yes! Of course</Button>
          <Button onClick={handleDialogNo}>No, thank you</Button>
        </DialogActions>
      </Dialog>
    </>
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
