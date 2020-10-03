import React from "react";
import "./css/Tile.css";

function Tile(props) {
  const { tileBorderColor, tileImg, tileTitle } = props.tileInfo;

  return (
    <div
      className="tile-container"
      style={{
        borderColor: tileBorderColor,
      }}
    >
      <img src={tileImg} className="tile-avatar" alt={tileTitle} />
    </div>
  );
}

export default Tile;
