import React from "react";
import { Button, Paper, Typography } from "@mui/material";

function WelcomePage({ setShowPage }) {
  return (
    <Paper
      elevation={3}
      style={{
        minWidth: 650,
        minHeight: 400,
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h1"
        component="div"
        gutterBottom
        style={{ textAlign: "center", fontWeight: 500 }}
      >
        Welcome!
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={() => setShowPage("WhoIsGoingToPlay")}
      >
        Start
      </Button>
    </Paper>
  );
}

export default WelcomePage;
