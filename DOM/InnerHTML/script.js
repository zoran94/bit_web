function selectElements(arr, node) {

    // var getBody = document.querySelector("body")
    // var selected = document.createElement("select");
    // selected.innerHTML = "<option>prva opcija</option><option>druga opcija</option>";

    // getBody.appendChild(selected);


    // var getSelect = document.createElement("select");



    // var option1 = document.createElement("option");
    // var option2 = document.createElement("option");


    // var text1 = document.createTextNode("opcija 1");
    // var text2 = document.createTextNode("opcija 2");

    // document.querySelector("body").appendChild(getSelect)

    // option1.appendChild(text1)
    // option2.appendChild(text2)

    // getSelect.appendChild(option1);
    // getSelect.appendChild(option2);


for(var i = 0; i < arr.length; i++){
    var elem = document.createElement(arr[i]);
    node.appendChild(elem)
    elem.textContent = "tekstovi"
}
}
selectElements(["select"], document.querySelector("div"));
selectElements(["option", "option", "option", "option"],document.querySelector("select"))



function validateForm() {


    var getForm = document.querySelector("form").querySelectorAll("input");


    console.log(getForm);
    for (var i = 0; i < getForm.length; i++) {

        if (getForm[i].hasAttribute("required") && !(getForm[i].value)) {
            getForm[i].setAttribute("class", "red")

        }
    }

}
validateForm();
