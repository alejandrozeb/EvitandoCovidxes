class Angel extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        //cuando entre aqui se creara la escena
        scene.add.existing(this);
        //animacion
        this.dataAnim3= scene.cache.json.get('medico1_anim');
       
        //cargamos la animacoin
        scene.anims.fromJSON(this.dataAnim3);
        //this.anims.play('down');
        //agregando fisica a las palas
        scene.physics.world.enable(this);
        //que la pala no sobrepase los limites
        this.body.setCollideWorldBounds(true);
        //
        //
        this.setOrigin(0.5,0.5);
        this.body.setSize(150,300).setOffset(-20,0);
        this.body.bounce.set(0.4);
    }
}

export default Angel;