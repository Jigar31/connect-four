import React from "react";
import "../css/TotalGameSetting.css";

function TotalGameSetting(props) {
  const totalGamesOptions = [2, 3, 5, 10];

  const totalGamesSelected = props.totalGames;
  const setTotalGames = props.setTotalGames;
  const closeModal = props.closeModal;
  let newTotalGames = totalGamesSelected;

  return (
    <div className="total-games-setting">
      <div className="setting-title">Number of Games</div>
      <div className="setting-options radio-group">
        {totalGamesOptions.map((totalGamesOption, index) => {
          return (
            <div
              className="total-games-option"
              key={`total-games-options-${index}`}
            >
              <input
                type="radio"
                className="radio-option"
                id={`total-games-option-${index}`}
                defaultChecked={totalGamesOption === totalGamesSelected}
                name="total-games-option"
                value={totalGamesOption}
                onClick={(e) => {
                  newTotalGames = parseInt(e.target.value);
                }}
              />
              <label
                className="radio-option-label"
                htmlFor={`total-games-option-${index}`}
              >
                {totalGamesOption} Games
              </label>
            </div>
          );
        })}
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
            setTotalGames(newTotalGames);
            closeModal();
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default TotalGameSetting;
