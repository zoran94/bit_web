
// var staying = document.querySelector(".stay");
// var run = document.querySelector(".running");

// var i = null;
// var move = function(){
//     var position = document.body.style.backgroundPositionX || 0;
//     document.body.style.backgroundPositionX = parseInt(position) - 25 + "px";
// };
// var reverse = function(){
//     var position = document.body.style.backgroundPositionX || 0;
//     document.body.style.backgroundPositionX = parseInt(position) + 25 +"px"; 
// };

// function moving(e){
//     if(i){
//         return;
//     }

//     if(e.keyCode == "39"){
//         run.classList.add("show");
//         staying.classList.add("invisible");
//         run.style.transform = "scaleY(1)";
//         i = setInterval(move, 100);
//     };
//     if(e.keyCode == "37"){
//         run.classList.remove("show");
//         staying.classList.remove("invisible");
//         run.style.transform = "scaleY(-1)";
//         i = setInterval(reverse, 100)
//     };

// }
//     function stop(e){
//         if(e.keyCode == "39"){
//             run.classList.remove("show");
//             staying.classList.remove("invisible");
//             run.style.transform = "scaleX(1)";
//             clearInterval(i);
//             i = null;
//         };

//         if(e.keyCode === "37"){
//             run.classList.remove("show");
//             staying.classList.remove("invisible");
//             run.style.transform = "scaleX(1)";
//             clearInterval(i);
//             i = null;
//         }
//     }



// document.addEventListener("keydown", moving);
// document.addEventListener("keyup", stop);



