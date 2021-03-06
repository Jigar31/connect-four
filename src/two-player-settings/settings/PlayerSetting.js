import React from "react";

import "../css/PlayerSetting.css";

function PlayerSetting(props) {
  const title = props.title;
  const playerName = props.playerName;
  const setPlayerName = props.setPlayerName;
  const closeModal = props.closeModal;
  let newPlayerName = playerName;

  return (
    <div className="player-setting">
      <div className="setting-title">{title}</div>
      <div className="setting-input">
        <input
          type="text"
          className="setting-value"
          defaultValue={playerName}
          onChange={(e) => {
            newPlayerName = e.target.value;
          }}
        />
      </div>
      <div className="setting-button-group">
        <button
          type="button"
          className="cancel-button setting-button"
          onClick={() => closeModal()}
        >
          Cancel
        </button>
        <button
          type="button"
          className="confirm-button setting-button"
          onClick={() => {
            setPlayerName(newPlayerName);
            closeModal();
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default PlayerSetting;
