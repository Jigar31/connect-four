import React from "react";
import "./css/Congratulations.css";

function Congratulations(props) {
  let { tournamentEnd, player, game } = props.tournamentEnd;
  let message = "";

  if (tournamentEnd) {
    message = `${player}, you won tournament`;
  } else {
    message = `${player}, you won Game ${game}`;
  }

  return (
    <div className="congratulations">
      <div className="congratulations-title">Congratulations!</div>
      <div className="winner-info">{message}</div>
    </div>
  );
}

export default Congratulations;
