import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Game from "./game/Game";
import TwoPlayer from "./two-player-settings/TwoPlayer";
import Home from "./home/Home";
import NotFound from "./common/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/two-player" component={TwoPlayer} />
          <Route exact path="/" component={Home} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
