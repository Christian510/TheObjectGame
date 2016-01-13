var health = 100;
var name = "Player01";
var hits = 0;
function slap() {
    for ( health = 100; health > 0; health--){
    }
}

slap();

function update() {
   var x = document.getElementById("Health");
   x.innerText =  'test';
}

update();

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





