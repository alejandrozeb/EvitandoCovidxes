
class Creditos extends Phaser.Scene {
    constructor() {
        super({key: 'Creditos'});
    }

    init() {
        console.log('Scene: Creditos');
        this.cameras.main.setBackgroundColor('#0c0c0c');
    }

    create() {
        this.titulo = this.add.image(this.scale.width/2,this.scale.height/2,'tituloCre').setScale(0.5);


        const clickBoton = this.add.image(this.scale.width/2,this.scale.height/2+300,"botonVol").setScale(0.1)
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start("Menu");
        
      });



    }

    update(time, delta) {

    }
}

export default Creditos;
