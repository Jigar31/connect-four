import React, { useState } from "react";
import Modal from "../common/Modal";
import "./css/Home.css";

function Home(props) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const closeModal = () => setShowComingSoon(false);

  return (
    <div className="home-container">
      {showComingSoon && <Modal closeModal={closeModal}>Coming soon</Modal>}
      <header className="header">
        <p className="header__title">Connect Four</p>
        <p className="header__subtitle">
          Play with other players around the world.
        </p>
      </header>

      <main className="container">
        <div className="image-container">
          <div className="connect-four-img">
            <img src="" className="connect-four" alt="connect four" />
          </div>
          <div className="play">
            <img src="" className="play-icon" alt="play" />
            <p>PLAY</p>
          </div>
        </div>

        <div className="button-group">
          <button
            className="button custom-game-button"
            type="button"
            onClick={() => setShowComingSoon(true)}
          >
            Custom Game
          </button>
          <button
            className="button two-player-button"
            type="button"
            onClick={() => props.history.push("/two-player")}
          >
            Two Players
          </button>
          <button
            className="button game-online-button"
            type="button"
            onClick={() => setShowComingSoon(true)}
          >
            Game Online
          </button>
          <button
            className="button training-game-button"
            type="button"
            onClick={() => setShowComingSoon(true)}
          >
            Training Game
          </button>
        </div>
      </main>

      <footer className="footer">&copy; 2020</footer>
    </div>
  );
}

export default Home;
