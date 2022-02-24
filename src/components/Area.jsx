import React from "react";
import Grid from "@mui/material/Grid";
import { red, indigo } from "@mui/material/colors";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import {
  Badge,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Paper,
  Slide,
  Typography,
} from "@mui/material";
import TicTacToe from "../assets/images/Tic_tac_toe.png";
import Row from "./Row";
import ScoreHistory from "./ScoreHistory";
import ScoreHistoryDrawer from "./ScoreHistoryDrawer";

const player1 = "x";
const player2 = "o";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Area({ setShowPage, players, playingMode }) {
  const [currentPlayer, SetCurrentPlayer] = React.useState(player1);
  const [match, setMatch] = React.useState(Array(3).fill(Array(3).fill(null)));
  const [keepMatch, setKeepMatch] = React.useState([]);
  const [keepWinner, setKeepWinner] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [winner, setWinner] = React.useState(null);
  const [toogleDialog, setToogleDialog] = React.useState(false);
  const [toogleDialogEnd, setToogleDialogEnd] = React.useState(false);
  const [waitUseAction, setWaitUserAction] = React.useState(false);
  const [computerMove, setComputerMove] = React.useState(null);
  
  const computerMovimentAgainstHuman = React.useMemo(
    () => () => {
      if (match[0][0] === "x" && match[0][1] === "x" && match[0][2] === null) {
        return { line: 0, column: 2 };
      } else {
        if (
          match[0][0] === "x" &&
          match[0][2] === "x" &&
          match[0][1] === null
        ) {
          return { line: 0, column: 1 };
        } else {
          if (
            match[0][1] === "x" &&
            match[0][2] === "x" &&
            match[0][0] === null
          ) {
            return { line: 0, column: 0 };
          }
        }
      }
      if (match[1][0] === "x" && match[1][1] === "x" && match[1][2] === null) {
        return { line: 1, column: 2 };
      } else {
        if (
          match[1][0] === "x" &&
          match[1][2] === "x" &&
          match[1][1] === null
        ) {
          return { line: 1, column: 1 };
        } else {
          if (
            match[1][1] === "x" &&
            match[1][2] === "x" &&
            match[1][0] === null
          ) {
            return { line: 1, column: 0 };
          }
        }
      }
      if (match[2][0] === "x" && match[2][1] === "x" && match[2][2] === null) {
        return { line: 2, column: 2 };
      } else {
        if (
          match[2][0] === "x" &&
          match[2][2] === "x" &&
          match[2][1] === null
        ) {
          return { line: 2, column: 1 };
        } else {
          if (
            match[2][1] === "x" &&
            match[2][2] === "x" &&
            match[2][0] === null
          ) {
            return { line: 2, column: 0 };
          }
        }
      }
      if (match[0][0] === "x" && match[1][0] === "x" && match[2][0] === null) {
        return { line: 2, column: 0 };
      } else {
        if (
          match[0][0] === "x" &&
          match[2][0] === "x" &&
          match[1][0] === null
        ) {
          return { line: 1, column: 0 };
        } else {
          if (
            match[1][0] === "x" &&
            match[2][0] === "x" &&
            match[0][0] === null
          ) {
            return { line: 0, column: 0 };
          }
        }
      }
      if (match[0][1] === "x" && match[1][1] === "x" && match[2][1] === null) {
        return { line: 2, column: 1 };
      } else {
        if (
          match[0][1] === "x" &&
          match[2][1] === "x" &&
          match[1][1] === null
        ) {
          return { line: 1, column: 1 };
        } else {
          if (
            match[1][1] === "x" &&
            match[2][1] === "x" &&
            match[0][1] === null
          ) {
            return { line: 0, column: 1 };
          }
        }
      }
      if (match[0][2] === "x" && match[1][2] === "x" && match[2][2] === null) {
        return { line: 2, column: 2 };
      } else {
        if (
          match[0][2] === "x" &&
          match[2][2] === "x" &&
          match[1][2] === null
        ) {
          return { line: 1, column: 2 };
        } else {
          if (
            match[1][2] === "x" &&
            match[2][2] === "x" &&
            match[0][2] === null
          ) {
            return { line: 0, column: 2 };
          }
        }
      }
      if (match[0][0] === "x" && match[1][1] === "x" && match[2][2] === null) {
        return { line: 2, column: 2 };
      } else {
        if (
          match[0][0] === "x" &&
          match[2][2] === "x" &&
          match[1][1] === null
        ) {
          return { line: 1, column: 1 };
        } else {
          if (
            match[1][1] === "x" &&
            match[2][2] === "x" &&
            match[0][0] === null
          ) {
            return { line: 0, column: 0 };
          }
        }
      }
      if (match[2][0] === "x" && match[1][1] === "x" && match[0][2] === null) {
        return { line: 0, column: 2 };
      } else {
        if (
          match[2][0] === "x" &&
          match[0][2] === "x" &&
          match[1][1] === null
        ) {
          return { line: 1, column: 1 };
        } else {
          if (
            match[1][1] === "x" &&
            match[0][2] === "x" &&
            match[2][0] === null
          ) {
            return { line: 2, column: 0 };
          }
        }
      }
      return null;
    },
    [match]
  );

  const handleComputerMove = React.useMemo(
    () => () => {
      let computerChoice = computerMovimentAgainstHuman();
      if (computerChoice !== null) {
        setComputerMove(computerChoice);
      } else {
        // If no sequence has been found for Computer, a random play will be taken
        while (true) {
          let line = Math.floor(Math.random() * 3);
          let column = Math.floor(Math.random() * 3);
          if (match[line][column] === null) {
            setComputerMove({ line, column });
            break;
          }
        }
      }
    },
    [computerMovimentAgainstHuman, match]
  );

  const nextPlayer = () => {
    SetCurrentPlayer((prevCurrentPlayer) =>
      prevCurrentPlayer === player1 ? player2 : player1
    );
  };

  const playFn = ({ player, line, column }) => {
    let newMatch = [[...match[0]], [...match[1]], [...match[2]]];
    newMatch[line][column] = player;
    setMatch(newMatch);
  };

  React.useEffect(() => {
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
          setWinner("o");
        } else {
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
          setWinner("t");
          setGameOver(true);
        }
      }
    }
    endOfTheGame();

    if (currentPlayer === "o" && playingMode === "onePlayer") {
      handleComputerMove();
    }
  }, [match, currentPlayer, playingMode, handleComputerMove]);

  React.useEffect(() => {
    if (gameOver === true) {
      setToogleDialog(true);
    }
  }, [gameOver]);

  // //  Strategy to cut the enemy's sequence

  //   // Considering Computer will ALWAYS be 'o' and Player 'x', here the Player's
  //   // sequence is being blocked

  //   // If Computer has not played yet, it will try to keep a sequence
  //   if (computerPlayed = false) {
  //      if (match[0, 0] === 'o' || match[0, 1] === 'o' || match[0, 2] === null){match[0, 2] = 'o'; computerPlayed = true;} else {if (match[0, 0] === 'o' || match[0, 2] === 'o' || match[0, 1] === null){match[0, 1] = 'o'; computerPlayed = true;} else {if (match[0, 1] === 'o' || match[0, 2] === 'o' || match[0, 0] === null){match[0, 0] = 'o'; computerPlayed = true;}}}
  //      if (match[1, 0] === 'o' || match[1, 1] === 'o' || match[1, 2] === null){match[1, 2] = 'o'; computerPlayed = true;} else {if (match[1, 0] === 'o' || match[1, 2] === 'o' || match[1, 1] === null){match[1, 1] = 'o'; computerPlayed = true;} else {if (match[1, 1] === 'o' || match[1, 2] === 'o' || match[1, 0] === null){match[1, 0] = 'o'; computerPlayed = true;}}}
  //      if (match[2, 0] === 'o' || match[2, 1] === 'o' || match[2, 2] === null){match[2, 2] = 'o'; computerPlayed = true;} else {if (match[2, 0] === 'o' || match[2, 2] === 'o' || match[2, 1] === null){match[2, 1] = 'o'; computerPlayed = true;} else {if (match[2, 1] === 'o' || match[2, 2] === 'o' || match[2, 0] === null){match[2, 0] = 'o'; computerPlayed = true;}}}
  //      if (match[0, 0] === 'o' || match[1, 0] === 'o' || match[2, 0] === null){match[2, 0] = 'o'; computerPlayed = true;} else {if (match[0, 0] === 'o' || match[2, 0] === 'o' || match[1, 0] === null){match[1, 0] = 'o'; computerPlayed = true;} else {if (match[1, 0] === 'o' || match[2, 0] === 'o' || match[0, 0] === null){match[0, 0] = 'o'; computerPlayed = true;}}}
  //      if (match[0, 1] === 'o' || match[1, 1] === 'o' || match[2, 1] === null){match[2, 1] = 'o'; computerPlayed = true;} else {if (match[0, 1] === 'o' || match[2, 1] === 'o' || match[1, 1] === null){match[1, 1] = 'o'; computerPlayed = true;} else {if (match[1, 1] === 'o' || match[2, 1] === 'o' || match[0, 1] === null){match[0, 1] = 'o'; computerPlayed = true;}}}
  //      if (match[0, 2] === 'o' || match[1, 2] === 'o' || match[2, 2] === null){match[2, 2] = 'o'; computerPlayed = true;} else {if (match[0, 2] === 'o' || match[2, 2] === 'o' || match[1, 2] === null){match[1, 2] = 'o'; computerPlayed = true;} else {if (match[1, 2] === 'o' || match[2, 2] === 'o' || match[0, 2] === null){match[0, 2] = 'o'; computerPlayed = true;}}}
  //      if (match[0, 0] === 'o' || match[1, 1] === 'o' || match[2, 2] === null){match[2, 2] = 'o'; computerPlayed = true;} else {if (match[0, 0] === 'o' || match[2, 2] === 'o' || match[1, 1] === null){match[1, 1] = 'o'; computerPlayed = true;} else {if (match[1, 1] === 'o' || match[2, 2] === 'o' || match[0, 0] === null){match[0, 0] = 'o'; computerPlayed = true;}}}
  //      if (match[2, 0] === 'o' || match[1, 1] === 'o' || match[0, 2] === null){match[0, 2] = 'o'; computerPlayed = true;} else {if (match[2, 0] === 'o' || match[0, 2] === 'o' || match[1, 1] === null){match[1, 1] = 'o'; computerPlayed = true;} else {if (match[1, 1] === 'o' || match[0, 2] === 'o' || match[2, 0] === null){match[2, 0] = 'o'; computerPlayed = true;}}}

  //   }

  //   // If no sequence has been found for Computer, a random play will be taken
  //   while (computerPlayed = false) {

  //      computerLine = random(1..3);
  //      computerRow  = random(1..3);

  //      if (match[computerLine, computerRow] === null) {
  //         match[computerLine, computerRow] = CurrentPlayer
  //         set computerPlayed = true;
  //      }
  //   }
  // }
  //   }

  const handleDialogYes = () => {
    setKeepMatch((prevKeepMatch) => [...prevKeepMatch, match]);
    setKeepWinner((prevKeepWinner) => [...prevKeepWinner, winner]);
    setMatch(Array(3).fill(Array(3).fill(null)));
    setGameOver(false);
    setWinner(null);
    setToogleDialog(false);
  };

  const handleDialogNo = () => {
    setKeepMatch((prevKeepMatch) => [...prevKeepMatch, match]);
    setKeepWinner((prevKeepWinner) => [...prevKeepWinner, winner]);
    setToogleDialogEnd(true)
  };

  const handleDialogEnd = () => {
    SetCurrentPlayer(player1);
    setKeepMatch([]);
    setMatch(Array(3).fill(Array(3).fill(null)));
    setGameOver(false);
    setWinner(null);
    setToogleDialog(false);
    setShowPage("Welcome");
  };

  let playerWhoWon = null;
  if (winner === "x") {
    playerWhoWon = players.player1;
  } else {
    playerWhoWon = players.player2;
  }

  return (
    <>
      <Fab
        color="error"
        aria-label="back"
        size="medium"
        style={{ position: "absolute", bottom: 20, right: 20 }}
        onClick={() => handleDialogNo()}
        // onClick={() => setShowPage('Welcome')}
      >
        <DirectionsRunIcon sx={{ fontSize: 30 }} />
      </Fab>

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
            <Grid item>
              <Badge
                badgeContent={keepWinner.filter((w) => w === "x").length}
                color="primary"
              >
                <Paper
                  elevation={3}
                  style={{
                    padding: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    backgroundColor:
                      currentPlayer === "x" && !gameOver
                        ? indigo[100]
                        : "white",
                    opacity: winner === "o" || winner === "t" ? 0.1 : 1,
                  }}
                >
                  {players.player1}
                  <CloseOutlinedIcon
                    sx={{ color: indigo[900], ml: 1, my: 0.5, fontSize: 30 }}
                  />
                </Paper>
              </Badge>
            </Grid>
            <Grid
              item
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

            <Grid item>
              <Badge
                badgeContent={keepWinner.filter((w) => w === "o").length}
                color="error"
              >
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
              </Badge>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          {Array(3)
            .fill(null)
            .map((_, ix) => (
              <Row
                key={ix}
                player={currentPlayer}
                nextPlayer={nextPlayer}
                line={ix}
                playFn={playFn}
                gameOver={waitUseAction}
                computerMove={computerMove}
              />
            ))}
        </Grid>
      </Grid>

      <ScoreHistoryDrawer
        players={players}
        keepMatch={keepMatch}
        keepWinner={keepWinner}
      />

      <Dialog
        open={toogleDialog}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={true}
        maxWidth="xs"
        onClose={() => false}
        disableEscapeKeyDown
        TransitionProps={{
          onExit: () => {
            setWaitUserAction(true);
          },
          onExited: () => {
            setWaitUserAction(false);
          },
        }}
      >
        <DialogTitle>
          <Typography
            variant="span"
            sx={{
              fontWeight: 500,
              fontSize: "2.125rem",
              lineHeight: 1.235,
              letterSpacing: "0.00735em",
            }}
          >
            Game Over!
          </Typography>
        </DialogTitle>
        <DialogContent>
          <div>
            {winner !== "t" ? (
              <Typography variant="h6" sx={{ mb: 2 }}>
                Congratulations {playerWhoWon}, you won!
              </Typography>
            ) : (
              <span>Nobody won, it is a tie!</span>
            )}

            <Box sx={{ mt: 5, fontSize: "larger" }}>
              Do you want to play again?
            </Box>
          </div>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Button
            variant="contained"
            color="success"
            sx={{ mr: 5 }}
            onClick={handleDialogYes}
          >
            Yes! Of course
          </Button>
          <Button variant="contained" color="error" onClick={handleDialogNo}>
            No, thank you
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={toogleDialogEnd}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={true}
        maxWidth="sm"
        onClose={() => false}
        disableEscapeKeyDown
        TransitionProps={{
          onExit: () => {
            setWaitUserAction(true);
          },
          onExited: () => {
            setWaitUserAction(false);
          },
        }}
      >
        <DialogContent>

        <ScoreHistory
          players={players}
          keepMatch={keepMatch}
          keepWinner={keepWinner}
        />

        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 2,
          }}
        >
          <Button
            variant="contained"
            color="success"
            sx={{ mr: 5 }}
            onClick={handleDialogEnd}
          >
            EXIT
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}