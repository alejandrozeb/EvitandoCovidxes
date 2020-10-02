
class Menu extends Phaser.Scene {
    constructor() {
        super({key: 'Menu'});
    }

    init() {
        this.cameras.main.setBackgroundColor('#0c0c0c');
    }

    create() {
    const clickBoton = this.add.image(this.scale.width/2,this.scale.height/2+100,"boton").setScale(0.22)
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start("Juego");
        
      });

      const clickBoton2 = this.add.image(this.scale.width/2,this.scale.height/2+255,"botonCre").setScale(0.1)
      .setInteractive()
      .on('pointerdown', () => {
        this.scene.start("Creditos");
      });



      this.titulo = this.add.image(this.scale.width/2,this.scale.height-550,'titulo').setScale(0.5);

      //covidxe
      this.golem = this.add.sprite(this.scale.width-200,550,'covidxe');
      this.golem.flipX=true;
      this.dataAnim = this.cache.json.get('covidxe_anim');
          
      this.anims.fromJSON(this.dataAnim);
     
      this.golem.anims.play('walking');
      //medico
      this.personajeMedico = this.add.image(150,550,'medicoWalk').setScale(0.2);
      //letra

        //mensaje
        let graphics = this.add.graphics();
        graphics.fillStyle(0xafa2b3,1);
        graphics.fillRect(50,320,200,100);
        this.add.text(50,320,"Debo llevar").setFontFamily("Arial").setFontSize(30).setOrigin(0,0).setColor('#000000');
        this.add.text(50,350,"medicamentos").setFontFamily("Arial").setFontSize(30).setOrigin(0,0).setColor('#000000');
        this.add.text(50,380,"a mis amigos").setFontFamily("Arial").setFontSize(30).setOrigin(0,0).setColor('#000000');
    }

    update(time, delta) {
        
    }
}

export default Menu;
