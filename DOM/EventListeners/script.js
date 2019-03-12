
//var getFirst = $("body");

//var getImg = $("img");
// var buttonRemove = $("button");



function remPlayer() {
    $("body").off("click", movePlayer);
}


function movePlayer(event) {

    var moveR = event.pageX;
    var moveL = event.pageY;
    $("img").css("left", moveR + "px");
    $("img").css("top", moveL + "px");

}

$("body").on("click", movePlayer);

$("button").on("click", remPlayer);



// getFirst.addEventListener("click", movePlayer);


//buttonRemove.addEventListener("click", remPlayer);

