import React from "react";

function Congratulations(props) {
  return (
    <div className="congratulations">
      <p className="congratulations-title">Congratulations</p>
      <p className="winner-info">
        {props.player}, you won Game {props.game}
      </p>
    </div>
  );
}

export default Congratulations;
