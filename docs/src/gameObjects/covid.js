class Covid extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        //cuando entre aqui se creara la escena
        scene.add.existing(this);
        //agregando fisica a las palas
        scene.physics.world.enable(this);
        //que la pala no sobrepase los limites
        this.body.setCollideWorldBounds(true);

        this.setOrigin(0.5,0.5);
        this.setScale(0.4);
        this.body.bounce.set(0.4);
    }
}

export default Covid;