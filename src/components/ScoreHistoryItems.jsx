import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { green, red } from "@mui/material/colors";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Game from "./Game";

export default function ScoreHistoryItems({ keepMatch, keepWinner }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {keepMatch?.map((match, ix) => (
        <Accordion
          key={`match-${ix}`}
          expanded={expanded === `panel-${ix}`}
          onChange={handleChange(`panel-${ix}`)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 200,
              }}
            >
              {keepWinner[ix] === "x" ? (
                <CheckCircleOutlineRoundedIcon
                  sx={{ color: green[500], my: 0.5, fontSize: 30 }}
                />
              ) : (
                <CancelOutlinedIcon
                  sx={{ color: red[500], my: 0.5, fontSize: 30 }}
                />
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 200,
              }}
            >
              {keepWinner[ix] === "o" ? (
                <CheckCircleOutlineRoundedIcon
                  sx={{ color: green[500], my: 0.5, fontSize: 30 }}
                />
              ) : (
                <CancelOutlinedIcon
                  sx={{ color: red[500], my: 0.5, fontSize: 30 }}
                />
              )}
            </Box>
          </AccordionSummary>

          <AccordionDetails>
            <Game match={match} style={{ marginBottom: 30 }} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
