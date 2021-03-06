import React, { useState, Fragment } from "react";
import Modal from "../common/Modal";
import "./css/Home.css";

import ConnectFourImg from "../assets/home/connect-four.png";
import PlayIcon from "../assets/home/play-icon.png";
import CustomGameIcon from "../assets/home/custom-game-icon.png";
import TwoPlayerIcon from "../assets/home/two-player-icon.png";
import OnlineGameIcon from "../assets/home/online-game-icon.png";
import TrainingGameIcon from "../assets/home/training-game-icon.png";

function Home(props) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const closeModal = () => setShowComingSoon(false);

  localStorage.clear();

  return (
    <Fragment>
      {showComingSoon && (
        <Modal closeModal={closeModal}>
          <div className="coming-soon">Coming soon</div>
        </Modal>
      )}

      <div className="home-container">
        <header className="header">
          <p className="header__title">CONNECT FOUR!</p>
          <p className="header__subtitle">
            Play with other players around the world.
          </p>
        </header>

        <main className="container">
          <div className="img-container">
            <div className="connect-four-img-container">
              <span className="yellow-circle"></span>
              <img
                src={ConnectFourImg}
                className="connect-four-img"
                alt="connect four"
              />
              <span className="blue-circle"></span>
            </div>
            <div className="play">
              <img src={PlayIcon} className="play-icon" alt="play" />
              <p className="play-text">PLAY</p>
            </div>
          </div>

          <div className="rules-container">
            <div className="button-group">
              <button
                className="button two-player-button"
                type="button"
                onClick={() => props.history.push("/two-player")}
              >
                <img className="button-icon" src={TwoPlayerIcon} alt="" />
                Play Two Players
              </button>
            </div>
            <div className="rules">
              <p>How to play:</p>
              <ol className="rule-list">
                <li>Player who starts the game will drop a tile in a column</li>
                <li>Game will be played in alternates</li>
                <li>
                  <b>Game winner</b> will be player who first gets his/her 4
                  tiles in a row (which can be horizontal, vertical or
                  diagonal).
                </li>
                <li>
                  <b>Tournament winner</b> will be player who wins more games
                  than other player or wins more than 50% of tournament.
                </li>
              </ol>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="copyright">&copy; 2020</div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Home;
