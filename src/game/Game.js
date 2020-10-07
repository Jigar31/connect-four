import React, { useState, useEffect, useRef, useCallback } from "react";
import ContainerBox from "../common/ContainerBox";
import Congratulations from "./Congratulations";

import { initializeCanvas } from "./graphics/initializeCanvas";
import { fillColumn } from "./fillColumn";
import { getTurn } from "./game-logic/getTurn";
import { clearCanvas } from "./graphics/clearCanvas";

import BackArrow from "../assets/two-player/arrow-left.svg";
import Player1Avatar from "../assets/two-player/player1-avatar.png";
import Player2Avatar from "../assets/two-player/player2-avatar.png";

import "./css/Game.css";

function Game(props) {
  const {
    player1Name,
    player2Name,
    totalGames,
    turnSetting,
  } = props.location.state;

  const [player1, setPlayer1] = useState({
    name: player1Name,
    score: 0,
  });
  const [player2, setPlayer2] = useState({
    name: player2Name,
    score: 0,
  });

  const [gameStarter, setGameStarter] = useState(
    getTurn(turnSetting, "", player1Name, player2Name)
  );
  const [currentPlayer, setCurrentPlayer] = useState(gameStarter);
  const [currentGame, setCurrentGame] = useState(0);
  const [gameWinner, setGameWinner] = useState("");
  const [gameLooser, setGameLooser] = useState("");
  const [tournamentEnd, setTournamentEnd] = useState(false);
  const [tournamentWinner, setTournamentWinner] = useState("");
  const [showNextGame, setShowNextGame] = useState(false);

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
      value: player1.name,
      settings: false,
      score: player1.score,
      currentPlayer: currentPlayer,
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
      value: player2.name,
      settings: false,
      score: player2.score,
      currentPlayer: currentPlayer,
    },
  };

  // let [row, setRow] = useState(6);
  // let [column, setColumn] = useState(6);

  let row = 6;
  let column = 6;
  let newCanvasGrid;

  if (window.innerWidth < 550) {
    row = 6;
    column = 6;
    newCanvasGrid = Array(row)
      .fill()
      .map(() => Array(column).fill({}));
  } else if (window.innerWidth < 950) {
    row = 6;
    column = 7;
    newCanvasGrid = Array(row)
      .fill()
      .map(() => Array(column).fill({}));
  } else {
    row = 8;
    column = 8;
    newCanvasGrid = Array(row)
      .fill()
      .map(() => Array(column).fill({}));
  }

  const canvasRef = useRef(null);
  const [grid, setGrid] = useState(newCanvasGrid);

  const updateScore = (winner, looser) => {
    removeClickHandler();
    setShowNextGame(true);

    if (winner.name === player1.name) {
      setPlayer1((prevState) => ({ ...prevState, score: prevState.score + 1 }));
    } else {
      setPlayer2((prevState) => ({ ...prevState, score: prevState.score + 1 }));
    }

    setGameWinner(winner.name);
    setGameLooser(looser.name);

    setGameStarter((prevState) =>
      getTurn(
        turnSetting,
        prevState,
        player1.name,
        player2.name,
        winner.name,
        looser.name
      )
    );
  };

  useEffect(() => {
    setCurrentPlayer(gameStarter);
  }, [gameStarter]);

  const checkTournamentWin = useCallback(() => {
    if (
      currentGame > totalGames ||
      player1.score > Math.floor(totalGames / 2) ||
      player2.score > Math.floor(totalGames / 2)
    ) {
      let winner = player1.score > player2.score ? player1 : player2;
      setTournamentEnd(true);
      setTournamentWinner(winner.name);
      setGameWinner("");
      setGameLooser("");

      // props.history.push("/two-player");
    }
  }, [currentGame, player1, player2, totalGames]);

  const clickHandler = (e) => {
    fillColumn(
      e,
      canvasRef.current.getContext("2d"),
      canvasRef.current,
      grid,
      setGrid,
      player1,
      player2,
      updateScore,
      currentPlayer,
      changePlayer
    );
  };

  const addClickHandler = () => {
    canvasRef.current.addEventListener("click", clickHandler);
  };

  const removeClickHandler = () => {
    canvasRef.current.removeEventListener("click", clickHandler, false);
  };

  const changePlayer = () => {
    setCurrentPlayer((prevState) =>
      prevState === player1.name ? player2.name : player1.name
    );
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    checkTournamentWin();
  }, [gameWinner, player1, player2, checkTournamentWin]);

  const initializeGame = () => {
    setGameWinner("");
    setGameLooser("");
    setCurrentGame((prevState) => prevState + 1);
    let newGrid = Array(row)
      .fill()
      .map(() => Array(column).fill({}));
    setGrid(newGrid);
    let ctx = canvasRef.current.getContext("2d");
    clearCanvas(ctx, canvasRef.current.width, canvasRef.current.height);
    initializeCanvas(
      ctx,
      grid,
      setGrid,
      canvasRef.current.width,
      canvasRef.current.height,
      true
    );
    setShowNextGame(false);
    addClickHandler();
  };

  let canvasWidth =
    window.innerWidth < 550
      ? "300px"
      : window.innerWidth < 950
      ? "392px"
      : "497px";
  let canvasHeight =
    window.innerWidth < 550
      ? "300px"
      : window.innerWidth < 950
      ? "336px"
      : "497px";

  return (
    <div className="game-container">
      <div className="game-header">
        <img
          src={BackArrow}
          alt="back"
          className="game-header__back-icon"
          onClick={() => props.history.push("/two-player")}
        />
        <p className="game-header__title">Two Players</p>
      </div>
      <div className="game-board">
        <div className="game">
          <canvas
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
          ></canvas>
        </div>
        <div className="game-info">
          <div className="info">
            <div className="info-header">{totalGames} Games Tournament</div>
            {!tournamentEnd && gameWinner === "" && (
              <div className="current-game-info">
                Playing Game {currentGame}
              </div>
            )}
            {!tournamentEnd && gameWinner !== "" && (
              <Congratulations
                player={gameWinner}
                game={currentGame}
                tournamentEnd={false}
              />
            )}

            {tournamentEnd && (
              <Congratulations player={tournamentWinner} tournamentEnd={true} />
            )}
          </div>
          <div className="score-board-container">
            <ContainerBox
              info={containerBoxSettings.player1}
              currentGame={currentPlayer}
            />
            <ContainerBox
              info={containerBoxSettings.player2}
              currentPlayer={currentPlayer}
            />
          </div>
          <div className="game-button-group">
            {!tournamentEnd && showNextGame && (
              <button
                type="button"
                className="game-button next-game-button"
                onClick={() => {
                  initializeGame();
                }}
              >
                Next Game
              </button>
            )}
            {!tournamentEnd && !showNextGame && (
              <button type="button" className="game-button undo-button">
                Undo
              </button>
            )}
            {tournamentEnd && (
              <button
                type="button"
                className="game-button play-again-button"
                onClick={() => {
                  setGameStarter(
                    getTurn(turnSetting, "", player1Name, player2Name)
                  );
                  setTournamentEnd(false);
                  setTournamentWinner("");
                  setPlayer1((prevState) => ({ ...prevState, score: 0 }));
                  setPlayer2((prevState) => ({ ...prevState, score: 0 }));
                  setCurrentGame(0);
                  initializeGame();
                }}
              >
                Play Again
              </button>
            )}
            <button
              type="button"
              className="game-button end-tournament-button"
              onClick={() => {
                props.history.push("/two-player");
                //setPlayer1((prevState) => ({ ...prevState, score: 0 }));
                //setPlayer2((prevState) => ({ ...prevState, score: 0 }));
                //setCurrentGame(0);
                //initializeGame();
              }}
            >
              End Tournament
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
