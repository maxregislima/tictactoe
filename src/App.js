import React from "react";
import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import Area from "./components/Area";
import WhoIsGoingToPlayPage from "./pages/WhoIsGoingToPlayPage";
import PlayersNamePage from "./pages/PlayersNamePage";

// 0. welcome
// 1. perguntar se vai jogar com outro jogador ou contra o computador
// 2. pedir nome(s)
// 3. iniciar (Area)
// 4. finalizar o jogo

function App() {
  const [showPage, setShowPage] = React.useState("Welcome");

  return (
    <div className="App">
      <div className="divison">
        {showPage === "Welcome" ? (
          <WelcomePage setShowPage={setShowPage} />
        ) : showPage === "WhoIsGoingToPlay" ? (
          <WhoIsGoingToPlayPage setShowPage={setShowPage}/>
        ) : showPage === "PlayersName" ? (
          <PlayersNamePage setShowPage={setShowPage}/>
        ) : (
          <Area />
        )}
      </div>
    </div>
  );
}

export default App;
