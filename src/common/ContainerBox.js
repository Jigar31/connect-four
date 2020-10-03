import React, { Fragment } from "react";
import Tile from "./Tile";
import "./css/ContainerBox.css";

function ContainerBox(props) {
  const {
    tileInfo,
    containerBoxColor,
    containerBoxBorderColor,
    title,
    value,
    showModal,
    settings,
    score,
    currentPlayer,
  } = props.info;

  let containerBoxContent;
  let containerBoxClass;
  let playerTileClass = "";

  if (settings) {
    containerBoxClass = "container-box";

    containerBoxContent = (
      <div className="container-box__info">
        <div className="container-box__title">{title}</div>
        <div className="container-box__value" onClick={() => showModal()}>
          {value}
        </div>
      </div>
    );
  } else {
    containerBoxClass = "container-box score-board";
    playerTileClass =
      currentPlayer === value
        ? "current-player player-tile"
        : "transparent-border player-tile";
    containerBoxContent = (
      <Fragment>
        <div className="score-board-container">
          <div className="container-box__info__readonly">
            <div className="container-box__title">{title}</div>
            <div className="container-box__value">{value}</div>
          </div>
          <div className="container-box__info__readonly score-info">
            <div className="container-box__title">Score</div>
            <div className="container-box__value">{score}</div>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <div
      className={containerBoxClass}
      style={{
        backgroundColor: containerBoxColor,
        borderColor: containerBoxBorderColor,
      }}
    >
      <div className={playerTileClass}>
        <Tile tileInfo={tileInfo} />
      </div>
      {containerBoxContent}
    </div>
  );
}

export default ContainerBox;
