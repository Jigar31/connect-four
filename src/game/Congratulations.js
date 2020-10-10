import React from "react";
import "./css/Congratulations.css";

function Congratulations(props) {
  let { tournamentEnd, player, game } = props;

  return (
    <div className="congratulations">
      <div className="congratulations-title">
        {player !== "" && "Congratulations!"}
        {player === "" && "Draw!"}
      </div>
      <div className="winner-info">
        {!tournamentEnd && `${player}, you won Game ${game}`}
        {tournamentEnd && player !== "" && `${player}, you won tournament`}
        {tournamentEnd && player === "" && `Tournament ends in draw`}
      </div>
    </div>
  );
}

export default Congratulations;
