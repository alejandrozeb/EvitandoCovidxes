class Obstaculo extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        //cuando entre aqui se creara la escena
        scene.add.existing(this);
        //agregando fisica a las palas
        scene.physics.world.enable(this);
        //especificar que este cuerpo es inamovible
        this.body.immovable = true;
        //que la pala no sobrepase los limites
        this.body.setCollideWorldBounds(true);
        this.setOrigin(0,0);
        this.setScale(0.4);
        this.body.bounce.set(0.1);
        this.body.setVelocityX(-100);
        
        this.scene.physics.world.setBoundsCollision(false,false,true,true);
        

    }
}

export default Obstaculo;