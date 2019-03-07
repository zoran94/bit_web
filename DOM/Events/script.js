
function getClass() {

    var color = document.querySelector("div").classList.toggle("red");


}
function turnOf() {

   //var selected = document.getElementById("button1").removeAttribute("onclick");
    //var hasAtr = document.getElementById("button1").hasAttribute("onclick");

    if(document.getElementById("button1").hasAttribute("onclick")){
        document.getElementById("button1").removeAttribute("onclick");
        document.getElementById("button2").innerHTML = "enabletoggle";

    }else{
        document.getElementById("button1").setAttribute("onclick", "getClass()");
        
        document.getElementById("button2").innerHTML = "Turn OFF";
    }




}


