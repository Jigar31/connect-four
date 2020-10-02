import React, { useState } from "react";
import ContainerBox from "../common/ContainerBox";
import Modal from "../common/Modal";
import PlayerSetting from "./settings/PlayerSetting";
import TotalGamesSetting from "./settings/TotalGameSetting";
import TurnSetting from "./settings/TurnSetting";

function TwoPlayer(props) {
  const [player1Name, setPlayer1Name] = useState("David");
  const [player2Name, setPlayer2Name] = useState("Maria");
  const [totalGames, setTotalGames] = useState(5);
  const [turnSetting, setTurnSetting] = useState(0);

  const [showPlayer1Modal, setShowPlayer1Modal] = useState(false);
  const [showPlayer2Modal, setShowPlayer2Modal] = useState(false);
  const [showTotalGamesModal, setShowTotalGamesModal] = useState(false);
  const [showTurnSettingModal, setShowTurnSettingModal] = useState(false);

  const closePlayer1Modal = () => setShowPlayer1Modal(false);
  const closePlayer2Modal = () => setShowPlayer2Modal(false);
  const closeTotalGamesModal = () => setShowTotalGamesModal(false);
  const closeTurnSettingModal = () => setShowTurnSettingModal(false);

  const turnSettingOptionLabels = [
    "Alternate turn",
    "Looser first",
    "Winner first",
    "Always player 01",
    "Always player 02",
  ];

  const containerBoxSettings = {
    player1: {
      tileInfo: {
        tileBorderColor: "white",
        tileImg: null,
        tileTitle: "player1 tile",
      },
      containerBoxColor: "lightgray",
      containerBoxBorderColor: "darkgray",
      title: "Player 1",
      value: player1Name,
      showModal: () => setShowPlayer1Modal(true),
      settings: true,
    },
    player2: {
      tileInfo: {
        tileBorderColor: "white",
        tileImg: null,
        tileTitle: "player2 tile",
      },
      containerBoxColor: "lightgray",
      containerBoxBorderColor: "darkgray",
      title: "Player 2",
      value: player2Name,
      showModal: () => setShowPlayer2Modal(true),
      settings: true,
    },
    totalGames: {
      tileInfo: {
        tileBorderColor: "white",
        tileImg: null,
        tileTitle: "total games tile",
      },
      containerBoxColor: "lightgray",
      containerBoxBorderColor: "darkgray",
      title: "Number of Games",
      value: `${totalGames} Games`,
      showModal: () => setShowTotalGamesModal(true),
      settings: true,
    },
    turnSetting: {
      tileInfo: {
        tileBorderColor: "white",
        tileImg: null,
        tileTitle: "turn setting tile",
      },
      containerBoxColor: "lightgray",
      containerBoxBorderColor: "darkgray",
      title: "Who starts",
      value: turnSettingOptionLabels[turnSetting],
      showModal: () => setShowTurnSettingModal(true),
      settings: true,
    },
  };

  const selectedGameSettings = {
    player1Name,
    player2Name,
    totalGames,
    turnSetting,
  };

  return (
    <div className="two-players">
      <div className="header">
        <span onClick={() => props.history.push("/")}>back button</span>
        <p>Two Players</p>
      </div>

      {showPlayer1Modal && (
        <Modal closeModal={closePlayer1Modal}>
          <PlayerSetting
            title="Player1"
            playerName={player1Name}
            setPlayerName={setPlayer1Name}
            closeModal={closePlayer1Modal}
          />
        </Modal>
      )}
      {showPlayer2Modal && (
        <Modal closeModal={closePlayer2Modal}>
          <PlayerSetting
            title="Player2"
            playerName={player2Name}
            setPlayerName={setPlayer2Name}
            closeModal={closePlayer2Modal}
          />
        </Modal>
      )}
      {showTotalGamesModal && (
        <Modal closeModal={closeTotalGamesModal}>
          <TotalGamesSetting
            totalGames={totalGames}
            setTotalGames={setTotalGames}
            closeModal={closeTotalGamesModal}
          />
        </Modal>
      )}
      {showTurnSettingModal && (
        <Modal closeModal={closeTurnSettingModal}>
          <TurnSetting
            turnSetting={turnSetting}
            setTurnSetting={setTurnSetting}
            turnSettingOptions={turnSettingOptionLabels}
            closeModal={closeTurnSettingModal}
          />
        </Modal>
      )}

      <div className="settings">
        <ContainerBox info={containerBoxSettings.player1} />
        <ContainerBox info={containerBoxSettings.player2} />
        <ContainerBox info={containerBoxSettings.totalGames} />
        <ContainerBox info={containerBoxSettings.turnSetting} />
        <hr />
        <button
          className="start-button"
          type="button"
          onClick={() =>
            props.history.push({
              pathname: "/game",
              state: selectedGameSettings,
            })
          }
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default TwoPlayer;
