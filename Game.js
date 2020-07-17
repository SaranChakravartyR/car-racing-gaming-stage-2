class Game {
    constructor(){

    }
    getgamestate(){
        var gamestateref = database.ref('gameState')
        gamestateref.on("value",function(data){
            gamestate = data.val();
        })
    }
    updategamestate(state){
        var gamestateref = database.ref('/')
        gamestateref.update({
            gameState: state
        })
    }
    start(){
       if(gamestate === 0){
           player = new Player();
           player.getplayercount();
           form = new Form();
           form.display();
           
       }
    }
}