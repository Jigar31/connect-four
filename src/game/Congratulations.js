import React from "react";
import "./css/Congratulations.css";

function Congratulations(props) {
  return (
    <div className="congratulations">
      <div className="congratulations-title">Congratulations!</div>
      <div className="winner-info">
        {props.player}, you won Game {props.game}
      </div>
    </div>
  );
}

export default Congratulations;
