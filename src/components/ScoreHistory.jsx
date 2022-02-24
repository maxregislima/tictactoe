import React from "react";
import { Badge, Box, Paper, Typography } from "@mui/material";
import ScoreHistoryItems from "./ScoreHistoryItems";
import { red, indigo } from "@mui/material/colors";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export default function ScoreHistory({ players, keepMatch, keepWinner }) {
  return (
    <div>
        <Paper elevation={3} sx={{ mt: 2, mx: 2, p: 3 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            Score history
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ mt: 2, mx: 2, p: 3 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingBottom: 2,
                paddingRight: 3,
                width: 200,
              }}
            >
              <Badge
                badgeContent={keepWinner.filter((w) => w === "x").length}
                color="primary"
              >
                <CloseOutlinedIcon
                  sx={{ color: indigo[900], my: 0.5, fontSize: 30 }}
                />
              </Badge>
              {players.player1}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",

                paddingBottom: 2,
                paddingRight: 3,
                width: 200,
              }}
            >
              <Badge
                badgeContent={keepWinner.filter((w) => w === "o").length}
                color="error"
              >
                <CircleOutlinedIcon
                  sx={{ color: red[900], my: 0.5, fontSize: 30 }}
                />
              </Badge>
              {players.player2}
            </Box>
          </div>
          <Paper elevation={3} sx={{ m: 2 }}>
            <ScoreHistoryItems
              players={players}
              keepMatch={keepMatch}
              keepWinner={keepWinner}
            />
          </Paper>
        </Paper>
    </div>
  );
}
