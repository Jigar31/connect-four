import React from "react";

function Tile(props) {
  const { tileBorderColor, tileImg, tileTitle } = props.tileInfo;

  return (
    <div
      className="tile"
      style={{
        borderColor: tileBorderColor,
      }}
    >
      <img src={tileImg} alt={tileTitle} />
    </div>
  );
}

export default Tile;
