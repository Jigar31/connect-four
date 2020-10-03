import React from "react";
import "./css/Congratulations.css";

function Congratulations(props) {
  let { tournamentEnd, player, game } = props;

  return (
    <div className="congratulations">
      <div className="congratulations-title">Congratulations!</div>
      <div className="winner-info">
        {!tournamentEnd && `${player}, you won Game ${game}`}
        {tournamentEnd && `${player}, you won tournament`}
      </div>
    </div>
  );
}

export default Congratulations;
