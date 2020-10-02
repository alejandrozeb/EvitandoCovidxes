import Creditos from './scenes/Creditos.js';
import GanaJuego from './scenes/GanaJuego.js';
import Gameover from './scenes/Gameover.js';
import Juego from './scenes/Juego.js';
import Menu from './scenes/Menu.js';
import Bootloader from './Bootloader.js';

const config = {
    title: "EvitandoCovidxes",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 1280,
        height: 720,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#ffffff",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 500
            }
        }
    },
    scene: [Bootloader, Menu, Juego, Gameover, GanaJuego, Creditos]
};

new Phaser.Game(config);