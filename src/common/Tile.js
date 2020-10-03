import React from "react";
import "./css/Tile.css";

function Tile(props) {
  const { tileBorderColor, tileImg, tileTitle } = props.tileInfo;
  const settings = props.settings;
  let tileClass = "";
  let tileContainerClass = "";

  if (settings) {
    tileClass = "tile-avatar";
    tileContainerClass = "tile-container";
  } else {
    tileClass = "tile-avatar-sm";
    tileContainerClass = "tile-container-sm";
  }

  return (
    <div
      className={tileContainerClass}
      style={{
        borderColor: tileBorderColor,
      }}
    >
      <img src={tileImg} className={tileClass} alt={tileTitle} />
    </div>
  );
}

export default Tile;
