import React, { useState, useEffect } from "react";
import ContainerBox from "../common/ContainerBox";
import Modal from "../common/Modal";
import PlayerSetting from "./settings/PlayerSetting";
import TotalGamesSetting from "./settings/TotalGameSetting";
import TurnSetting from "./settings/TurnSetting";

import "./css/TwoPlayer.css";

import BackArrow from "../assets/two-player/arrow-left.svg";
import Player1Avatar from "../assets/two-player/player1-avatar.png";
import Player2Avatar from "../assets/two-player/player2-avatar.png";
import TotalGamesAvatar from "../assets/two-player/total-games-avatar.png";
import TurnSettingAvatar from "../assets/two-player/turn-setting-avatar.png";

function TwoPlayer(props) {
  let storedPlayer1Name = localStorage.getItem("player1Name");
  let storedPlayer2Name = localStorage.getItem("player2Name");
  let storedTotalGames = localStorage.getItem("totalGames");
  let storedTurnSetting = localStorage.getItem("turnSetting");

  const [player1Name, setPlayer1Name] = useState(
    storedPlayer1Name ? storedPlayer1Name : "David"
  );
  const [player2Name, setPlayer2Name] = useState(
    storedPlayer2Name ? storedPlayer2Name : "Maria"
  );
  const [totalGames, setTotalGames] = useState(
    storedTotalGames ? parseInt(storedTotalGames) : 5
  );
  const [turnSetting, setTurnSetting] = useState(
    storedTurnSetting ? parseInt(storedTurnSetting) : 0
  );

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
        tileBorderColor: "#37AC5D",
        tileImg: Player1Avatar,
        tileTitle: "player1 tile",
      },
      containerBoxColor: "#DCF6E4",
      containerBoxBorderColor: "#70707026",
      title: "Player 01",
      value: player1Name,
      showModal: () => setShowPlayer1Modal(true),
      settings: true,
    },
    player2: {
      tileInfo: {
        tileBorderColor: "#F8D146",
        tileImg: Player2Avatar,
        tileTitle: "player2 tile",
      },
      containerBoxColor: "#F6EFD5",
      containerBoxBorderColor: "#70707026",
      title: "Player 02",
      value: player2Name,
      showModal: () => setShowPlayer2Modal(true),
      settings: true,
    },
    totalGames: {
      tileInfo: {
        tileBorderColor: "#B1C4F9",
        tileImg: TotalGamesAvatar,
        tileTitle: "total games tile",
      },
      containerBoxColor: "#EFF3FF",
      containerBoxBorderColor: "#70707026",
      title: "Number of Games",
      value: `${totalGames} Games`,
      showModal: () => setShowTotalGamesModal(true),
      settings: true,
    },
    turnSetting: {
      tileInfo: {
        tileBorderColor: "#B1C4F9",
        tileImg: TurnSettingAvatar,
        tileTitle: "turn setting tile",
      },
      containerBoxColor: "#EFF3FF",
      containerBoxBorderColor: "#70707026",
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

  useEffect(() => {
    localStorage.setItem("player1Name", player1Name);
  }, [player1Name]);

  useEffect(() => {
    localStorage.setItem("player2Name", player2Name);
  }, [player2Name]);

  useEffect(() => {
    localStorage.setItem("totalGames", totalGames);
  }, [totalGames]);

  useEffect(() => {
    localStorage.setItem("turnSetting", turnSetting);
  }, [turnSetting]);

  return (
    <div className="two-player-container">
      <div className="two-player__header ">
        <img
          src={BackArrow}
          alt="back"
          className="two-player__header__back-icon"
          onClick={() => props.history.push("/")}
        />
        <p className="two-player__header__title">Two Players</p>
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

      <div className="settings-container">
        <ContainerBox info={containerBoxSettings.player1} />
        <ContainerBox info={containerBoxSettings.player2} />
        <ContainerBox info={containerBoxSettings.totalGames} />
        <ContainerBox info={containerBoxSettings.turnSetting} />
        <div className="start-game">
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
    </div>
  );
}

export default TwoPlayer;
