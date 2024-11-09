import "./style.css";
import Phaser from "phaser";
import WelcomeScene from "./scenes/WelcomeScene";
import GameScene from "./scenes/GameScene";
import WinScene from "./scenes/WinScene";
import LoseScene from "./scenes/LoseScene";
import StartScene from "./scenes/StartScene";

let scale = {
  height: window.innerHeight,
  width: (window.innerHeight * 950) / 660,
  point: 0,
};

const config = {
  type: Phaser.WEBGL,
  width: scale.width,
  height: scale.height,
  canvas: gameCanvas,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [WelcomeScene, StartScene, GameScene, WinScene, LoseScene],
  initialScene: "WelcomeScene",
};

const game = new Phaser.Game(config);
