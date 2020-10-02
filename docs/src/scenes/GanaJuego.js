import Padre from '../gameObjects/padre.js';
import Hija from '../gameObjects/hija.js';
class GanaJuego extends Phaser.Scene {
    constructor() {
        super({key: 'GanaJuego'});
    }

    init() {
        console.log('Scene: GanaJuego');
    }

    create() {
        //background
        this.fondo=this.add.tileSprite(800,450,this.scale.width*2,this.scale.height*2, 'fondoFinal');
        this.fondo.flipX=false;
        //home
        this.add.image(260,610,'home').setScale(0.5);
        //personajes
        this.personajePadre = new Padre(this,490,620,'padre');
        this.personajeHija = new Hija(this,650,630,'hija');
        this.personajeMedico = this.add.image(1000,630,'medicoWalk').setScale(0.14);
        this.personajeMedico.flipX=true;

        //mensaje
        let graphics = this.add.graphics();
        graphics.fillStyle(0xffffff,1);
        graphics.fillRect(550,450,200,100);
        this.add.text(570,450,"Gracias por").setFontFamily("Arial").setFontSize(30).setOrigin(0,0).setColor('#000000');
        this.add.text(560,480,"Salvarnos de").setFontFamily("Arial").setFontSize(30).setOrigin(0,0).setColor('#000000');
        this.add.text(570,510,"los covidxes").setFontFamily("Arial").setFontSize(30).setOrigin(0,0).setColor('#000000');

        const clickBoton = this.add.image(this.scale.width-80,this.scale.height-20,"botonMenu").setScale(0.1)
        .setInteractive()
        .on('pointerdown', () => {
        this.scene.start("Menu");
      });
        
    }

    update(time, delta) {

    }
}

export default GanaJuego;
