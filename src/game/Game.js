import React, { useState, useEffect, useRef, useCallback } from "react";
import ContainerBox from "../common/ContainerBox";
import Congratulations from "./Congratulations";
import { initializeCanvas } from "./graphics/initializeCanvas";
import { fillColumn } from "./fillColumn";
import { getTurn } from "./game-logic/getTurn";
import { clearCanvas } from "./graphics/clearCanvas";

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

  const [currentPlayer, setCurrentPlayer] = useState(
    getTurn(turnSetting, player1Name, player1Name, player2Name)
  );
  const [currentGame, setCurrentGame] = useState(0);
  const [gameWinner, setGameWinner] = useState("");
  const [tournamentEnd, setTournamentEnd] = useState(false);
  const [showNextGame, setShowNextGame] = useState(false);

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
      value: player1.name,
      settings: false,
      score: player1.score,
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
      value: player2.name,
      settings: false,
      score: player2.score,
    },
  };

  let row = 8;
  let column = 8;

  const canvasRef = useRef(null);
  const [grid, setGrid] = useState(
    Array(row)
      .fill()
      .map(() => Array(column).fill(0))
  );

  const updateScore = (winner, looser) => {
    removeClickHandler();
    setShowNextGame(true);
    setCurrentPlayer((prevState) =>
      getTurn(
        turnSetting,
        prevState,
        player1.name,
        player2.name,
        winner.name,
        looser.name
      )
    );

    if (winner.name === player1.name) {
      setPlayer1((prevState) => ({ ...prevState, score: prevState.score + 1 }));
    } else {
      setPlayer2((prevState) => ({ ...prevState, score: prevState.score + 1 }));
    }

    setGameWinner(winner.name);
  };

  const checkTournamentWin = useCallback(() => {
    if (
      currentGame === totalGames ||
      player1.score > Math.floor(totalGames / 2) ||
      player2.score > Math.floor(totalGames / 2)
    ) {
      let winner = player1.score > player2.score ? player1 : player2;
      console.log(
        `Tournament winner is ${winner.name} with ${winner.score} wins`
      );
      setTournamentEnd(true);
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
      currentPlayer
    );
  };

  const addClickHandler = () => {
    canvasRef.current.addEventListener("click", clickHandler);
  };

  const removeClickHandler = () => {
    console.log("remove click handler");
    canvasRef.current.removeEventListener("click", clickHandler, false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    checkTournamentWin();
  }, [gameWinner, player1, player2, checkTournamentWin]);

  const initializeGame = () => {
    setGameWinner("");
    setCurrentGame((prevState) => prevState + 1);
    let newGrid = Array(row)
      .fill()
      .map(() => Array(column).fill(0));
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

  return (
    <div className="game">
      <div className="header">
        <span onClick={() => props.history.push("/two-player")}>
          back button
        </span>
        <p>Two Players</p>
      </div>
      <div className="game-board">
        <canvas ref={canvasRef} width="440px" height="440px"></canvas>
        <div className="game-info">
          <div className="info">
            <p>{totalGames} Games Tournament</p>
            {gameWinner !== "" && (
              <Congratulations player={gameWinner} game={currentGame} />
            )}
          </div>
          <div className="score-board">
            <ContainerBox info={containerBoxSettings.player1} />
            <ContainerBox info={containerBoxSettings.player2} />
            <div className="game-button-group">
              {!tournamentEnd && showNextGame && (
                <button
                  type="button"
                  className="game-button next-game-button"
                  onClick={() => {
                    initializeGame();
                    setCurrentPlayer(
                      getTurn(
                        turnSetting,
                        currentPlayer,
                        player1.name,
                        player2.name
                      )
                    );
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
              <button
                type="button"
                className="game-button end-tournament-button"
                onClick={() => {
                  setPlayer1((prevState) => ({ ...prevState, score: 0 }));
                  setPlayer2((prevState) => ({ ...prevState, score: 0 }));
                  setCurrentGame(0);
                  initializeGame();
                }}
              >
                End Tournament
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game;
