
var body = document.querySelector("body");
var imgOne = document.querySelectorAll("img");


function changeBorder(event){

    // if(imgOne.style.width === 300){
    //     event.stopPropagation()
    // }


    this.style.border = "3px solid red";
}

 for (var i = 0; i < imgOne.length; i++) {
        imgOne[i].addEventListener("click", changeBorder)
    }

  function elemClicker(event){
      console.log(event.target)
  }

  body.addEventListener("click", elemClicker)