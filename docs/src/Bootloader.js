
class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        //console.log('Bootloader');
        this.load.setPath('./assets/');
        //cargando imagenes
        this.load.image('fondoNoche4', 'background/background_3.png');
        this.load.image('fondoFinal', 'background/background_5.png');
        this.load.image('home', 'background/casa1.png');
        this.load.image('boton', 'botonIni3.png');
        this.load.image('botonCre', 'botonCre.png');
        this.load.image('botonVol', 'botonVolver.png');
        this.load.image('botonMenu', 'botonMenu.png');
        
        this.load.image('ladrillo', 'obstaculo/ladrillo.png');
        this.load.image('medicoWalk', 'personajes/medico_walk.png');  
        this.load.image('titulo', 'titulo.png');  
        this.load.image('tituloCre', 'titulo2.png');  

        

        //animacion
        //cargando un json
        this.load.json('covidxe_anim','personajes/anim_ene/covidxe_anim.json');
        this.load.atlas('covidxe', 'personajes/anim_ene/covidxe.png','personajes/anim_ene/covidxe_atlas.json');
        
       //medico1
       this.load.json('medico1_anim','personajes/anim_medi1/medico1_anim.json');
       this.load.atlas('medico1', 'personajes/anim_medi1/medico1.png','personajes/anim_medi1/medico1_atlas.json');
        //personaje padre y niña
        this.load.image('padre', 'personajes/padre.png');
        this.load.image('hija', 'personajes/hija.png');


        this.load.on('complete', () => {
        
            this.scene.start("Menu");
            //this.scene.start("Juego");
            //this.scene.start("GanaJuego");
            //this.scene.start("Creditos");
            //this.scene.start("Gameover");
        });
       
        

        
        
    }

    create() {
        //mostrando
    }
    update(){
        
    }
}
export default Bootloader;