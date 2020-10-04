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
          <p className="header__title">Connect Four</p>
          <p className="header__subtitle">
            Play with other players around the world.
          </p>
        </header>

        <main className="container">
          <div className="img-container">
            <div className="connect-four-img-container">
              <img
                src={ConnectFourImg}
                className="connect-four-img"
                alt="connect four"
              />
            </div>
            <div className="play">
              <img src={PlayIcon} className="play-icon" alt="play" />
              <p className="play-text">PLAY</p>
            </div>
          </div>

          <div className="button-group">
            <button
              className="button custom-game-button"
              type="button"
              onClick={() => setShowComingSoon(true)}
            >
              <img className="button-icon" src={CustomGameIcon} alt="" />
              Custom Game
            </button>
            <button
              className="button two-player-button"
              type="button"
              onClick={() => props.history.push("/two-player")}
            >
              <img className="button-icon" src={TwoPlayerIcon} alt="" />
              Two Players
            </button>
            <button
              className="button game-online-button"
              type="button"
              onClick={() => setShowComingSoon(true)}
            >
              <img className="button-icon" src={OnlineGameIcon} alt="" />
              Game Online
            </button>
            <button
              className="button training-game-button"
              type="button"
              onClick={() => setShowComingSoon(true)}
            >
              <img className="button-icon" src={TrainingGameIcon} alt="" />
              Training Game
            </button>
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
