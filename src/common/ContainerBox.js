import React from "react";
import Tile from "./Tile";

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
      <div className="container-box-main">
        <div className="container-box-title">{title}</div>
        <div className="container-box-value" onClick={() => showModal()}>
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
