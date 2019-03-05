function toRed() {
    var second = document.getElementById("second");
    second.className = "red";
}



function toBlue() {
    var lis = document.querySelectorAll("li");
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = "blue";
    }
}

function colorAndUppercase() {
    var lis = document.querySelectorAll("ul:nth-child(3) li");
    for (var j = 0; j < lis.length; j++) {
        lis[j].className = "green upperCase"
    }
}

toRed();
toBlue();
colorAndUppercase()