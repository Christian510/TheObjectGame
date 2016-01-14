var health = 100;
var name = "Player01";
var hits = 0;
function slap() {
    health -= 1;
    hits++;
   upDate();
}

function punch() {
    health -= 5;
    hits++;
    upDate();
}

function kick() {
    health -= 10;
    hits++;
    upDate();
}

function upDate() {
   var hp1 = document.getElementById("Health");
   hp1.innerText = health.toString();
   var hits1 = document.getElementById("Hits");
   hits1.innerText = hits.toString();
   var np1 = document.getElementById("Name");
   np1.innerText = name.toString();   
}

upDate();
