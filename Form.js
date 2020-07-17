class Form{
    constructor(){

    }
    display(){
        var Title = createElement('h3');
        Title.html("Multiplayer Gaming");
        Title.position(130,0);
        
        var inputbox = createInput("Name");
        inputbox.position(130,160);

        var button = createButton("Enter");
        button.position(250,200);

        var greeting = createElement('h5');

        button.mousePressed(function(){
            inputbox.hide();
            button.hide();
            var name = inputbox.value();
            playercount = playercount + 1;
            player.updateplayername(name);
            player.updateplayercount(playercount);
            greeting.html(" Welcome " + name + " To Multiplayer Gaming ");
            greeting.position(130,160);
        })
    }
}