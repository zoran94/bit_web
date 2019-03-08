
var getFirst = document.querySelector("body");

var getImg = document.querySelector("img");
var buttonRemove = document.querySelector("button");

function movePlayer(event) {

    var moveR = event.clientX;
    var moveL = event.clientY;
    getImg.style.left = moveR + "px";
    getImg.style.top = moveL + "px";


    console.log(moveR, moveL);

}

getFirst.addEventListener("click", movePlayer);



function remPlayer() {
    var remove = getFirst.removeEventListener("click", movePlayer);
}
buttonRemove.addEventListener("click", remPlayer);