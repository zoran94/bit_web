function listElements() {
    var list = document.getElementsByTagName("ul")[0].firstElementChild;
    alert(list.textContent)
}

function replaceTextOnLastLi(text) {
    var last = document.getElementsByTagName("ul")[0].lastElementChild;
    last.textContent = text;
}

listElements()
replaceTextOnLastLi("Kiza car");