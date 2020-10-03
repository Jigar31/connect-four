import React from "react";
import "../css/TurnSetting.css";

function TurnSetting(props) {
  const turnSettingOptions = props.turnSettingOptions;

  const turnSelected = props.turnSetting;
  const setTurnSetting = props.setTurnSetting;
  const closeModal = props.closeModal;

  let newTurnSetting = turnSelected;

  return (
    <div className="turn-setting">
      <div className="setting-title">Who Starts</div>
      <div className="setting-options">
        {turnSettingOptions.map((turnSetting, index) => (
          <div className="turn-setting-option" key={`turn-setting-${index}`}>
            <input
              type="radio"
              className="radio-option"
              id={`turn-setting-${index}`}
              name="turn-setting-option"
              defaultChecked={index === turnSelected}
              value={index}
              onClick={(e) => {
                newTurnSetting = parseInt(e.target.value);
              }}
            />
            <label
              className="radio-option-label"
              htmlFor={`turn-setting-${index}`}
            >
              {turnSetting}
            </label>
          </div>
        ))}
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
            setTurnSetting(newTurnSetting);
            closeModal();
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default TurnSetting;
