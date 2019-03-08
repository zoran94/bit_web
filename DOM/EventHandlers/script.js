var buttonSelector = document.querySelector("button");
var selected = document.querySelector(".first");

buttonSelector.onclick = function () {

    var getInput = document.querySelector("input").value;

    var getElem = document.createElement("p");
    getElem.textContent = getInput;

    selected.appendChild(getElem);
};
