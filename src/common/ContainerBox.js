import React from "react";
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
  } = props.info;

  let containerBoxContent;

  if (settings) {
    containerBoxContent = (
      <div className="container-box__info">
        <div className="container-box__title">{title}</div>
        <div className="container-box__value" onClick={() => showModal()}>
          {value}
        </div>
      </div>
    );
  } else {
    containerBoxContent = (
      <div className="container-box-main">
        <div className="container-box-title">{title}</div>
        <div className="container-box-value">{value}</div>
        <div className="score">
          Score
          {score}
        </div>
      </div>
    );
  }

  return (
    <div
      className="container-box"
      style={{
        backgroundColor: containerBoxColor,
        borderColor: containerBoxBorderColor,
      }}
    >
      <Tile tileInfo={tileInfo} />
      {containerBoxContent}
    </div>
  );
}

export default ContainerBox;
