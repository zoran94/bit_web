var imgOne = document.querySelectorAll("img");

var border = function () {
    for (var i = 0; i < imgOne.length; i++) {
        this.imgOne[i].style.border = "red solid 3px";
    }
}
imgOne.addEventListener("click", border);