var health = 100;
var name = "Player01";
var hits = 0;

function slap()

function punch() {
    for (health = 100 - 5; health > 5; health = health - 5) { 
            alert(health);
    }
}
punch();

function kick() {
    for (health = 100 - 10; health > 10; health = health - 10) { 
            alert(health);
    }
}
kick();

function Item(name,modifier,description){
    this.name = name,
    this.modifier = modifier,
    this.description = description
    this.draw = function(){
    
	}
}
var items{
    shield:new Item("Shield", 0.3, "This is an awesome shield"),
    helmet:new Item("Helemt", 0.2, "This is a heavy helmet"),
    armor:new Item("Armor", 0.1, "This is light-weight metal"),
}