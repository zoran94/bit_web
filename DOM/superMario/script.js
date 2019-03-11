var body = document.querySelector("body");
var i = null;

function move() {
    i--;
    body.style.backgroundPosition = i+"px";
   
} 
body.onkeydown = function(){
    window.setInterval(move, 10);
};


function stopMoving(event){
    if(event.keyCode == "37"){
        run.classList.add("invisible");
        stay.classList.remove("invisible");
        
        body.onkeydown = function(){
            window.clearInterval(move);
            i = null;
        };
    }
}


body.addEventListener("keydown", stopMoving)

// picture.setAttribute("src", "C:\Users\Zoran\Desktop\bit_web\DOM\superMario\Mario\mario_running.gif")
//  picture.style.position = "overwflow: visible";


// background-repeat: repeat-x;
// background-position:  0 0;
// background-size: 100% 100%;
// position: relative;

// animation: animate 2s linear infinite;
// background-size: contain;
// @keyframes animate {
//     from{
//         background-position:  0 0;
//     } 
//     to {
//         background-position: 100% 0; 
//     }
// }
///////////////


var body = document.querySelector("body");

var stay = document.querySelector(".stay");
var run = document.querySelector(".running")

function toRun(){
    stay.classList.add("invisible")
        
    run.removeAttribute("class");
};

body.addEventListener("keyup", toRun)


function get(){
    
 run.classList.add("top");
   
}
body.addEventListener("click", get);

