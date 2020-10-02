class Covidxe extends Phaser.GameObjects.Sprite {
    constructor(scene,x,y,type){
        super(scene,x,y,type);
        //cuando entre aqui se creara la escena
        scene.add.existing(this);
        this.dataAnim = scene.cache.json.get('covidxe_anim');
          
        scene.anims.fromJSON(this.dataAnim);
     
        this.anims.play('walking');
        //agregando fisica a las palas
        scene.physics.world.enable(this);
        this.body.immovable = true;
        //que la pala no sobrepase los limites
        this.body.setCollideWorldBounds(true);
        this.flipX=true;
        this.setOrigin(0.5,0.5); 
       // this.body.setSize(50,100,0,0).setOffset(25,0);
       this.body.setSize(190,230).setOffset(0,100);
        //console.log(this);
        //this.body.bounce.set(0.4);
        //this.body.immovable = true;
        this.body.setVelocityX(-100);

        
    }
}

export default Covidxe;