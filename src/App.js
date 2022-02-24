import React from "react";
import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import Area from "./components/Area";
import WhoIsGoingToPlayPage from "./pages/WhoIsGoingToPlayPage";
import PlayersNamePage from "./pages/PlayersNamePage";

function App() {
  const [showPage, setShowPage] = React.useState("Welcome");
  const [playingMode, setPlayingMode] = React.useState("twoPlayers");
  const [players, SetPlayers] = React.useState({
    player1: null,
    player2: null,
  });

  return (
    <div className="App">
      <div className="divison">
        {showPage === "Welcome" ? (
          <WelcomePage setShowPage={setShowPage} />
        ) : showPage === "WhoIsGoingToPlay" ? (
          <WhoIsGoingToPlayPage
            setShowPage={setShowPage}
            playingMode={playingMode}
            setPlayingMode={setPlayingMode}
          />
        ) : showPage === "PlayersName" ? (
          <PlayersNamePage
            setShowPage={setShowPage}
            playingMode={playingMode}
            players={players}
            SetPlayers={SetPlayers}
          />
        ) : (
          <Area
            setShowPage={setShowPage}
            players={players}
            playingMode={playingMode}
          />
        )}
      </div>
    </div>
  );
}

export default App;
