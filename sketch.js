var form,player,game;
var gamestate = 0, playercount = 0;
var database;


function setup(){
    createCanvas(400,400);
    database = firebase.database();

    game = new Game();
    game.getgamestate();
    game.start();
}

function draw(){
    
}