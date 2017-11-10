//Dimensiones del juego (Ancho,Alto)
var game = new Phaser.Game(1920,1200,Phaser.AUTO,{preload: preload, create: create, update: update});

// Preload, todo lo que se encuentre dentro de esta funcion se ejecutará mientras se cargan los componentes

function preload(){
  //game.load.image("Id","Ruta");
game.load.image('Block','Sprites/Blocks/Block1.gif');
game.load.image('BlockD', 'Sprites/Blocks/Block_D.gif');
game.load.image('Lava1', 'Sprites/Blocks/Lava1.gif');
game.load.image('Lava2', 'Sprites/Blocks/Lava2.gif');
game.load.image('Bg','Sprites/Background/Background.jpg');
// 'Id','Ruta',Ancho,Alto,Numero de imagenes (-1 la busca automaticamente),espacio entre imagenes, espacio del margen
game.load.spritesheet('Goomba','Sprites/Enemy/Goomba.gif', 32, 32,2,0,0);
game.load.spritesheet('Goomba','Sprites/Enemy/Spiny.png', 16, 16,2,0,0);

}

var Jugador;
var Block;
var BlockD;
var Goomba;
var Spiny;
var Score;
var MostrarScore;
var Salto;
//Controlar los enemigos en un array
var VGoomba = []; 
var VSpiny = [];

//Create, todo lo que se encuentre aqui se ejecutara cuando se haya cargado todo
function create(){
	// Cargar las fisicas para un juego arcade
game.physics.startSystem(Phaser.Physics.ARCADE);
game.add.sprite(0, 0,'Bg');
}


//Update, un loop equivalente a un step en gamemaker
function update(){



}
