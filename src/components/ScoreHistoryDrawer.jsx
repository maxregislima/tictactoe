import React from "react";
import Drawer from "@mui/material/Drawer";
import { Fab } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import ScoreHistory from "./ScoreHistory";

export default function ScoreHistoryDrawer({ players, keepMatch, keepWinner }) {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <div>
      <Fab
        color="primary"
        aria-label="back"
        size="medium"
        style={{ position: "absolute", top: 20, right: 20 }}
        onClick={() => setOpenDrawer(true)}
      >
        <HistoryIcon sx={{ fontSize: 30 }} />
      </Fab>

      <Drawer
        anchor={"right"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <ScoreHistory
          players={players}
          keepMatch={keepMatch}
          keepWinner={keepWinner}
        />
      </Drawer>
    </div>
  );
}
