function somethingNew() {
    console.log("Ovo Je Neka Vezba");
};

somethingNew();

// window.navigator
function toPrint() {
    console.log(window.navigator.platform);
    console.log(window.navigator.appVersion);
    console.log(window.navigator.appName);

};
toPrint();

function isOnline() {

    if (window.navigator.onLine) {
        console.log("online")
    } else {
        console.log("offline")
    }

};
isOnline();

// window.screen
function checkForScreen() {

    console.log("current height is " + window.screen.availHeight);
    console.log("current width is " + window.screen.availWidth);
    console.log("max height is " + window.screen.height);
    console.log("max width is " + window.screen.width);
}

checkForScreen();


// Location

function urlInformation() {

    console.log(window.location.href);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.search);

}
urlInformation();

// function reloadPage() {

//     console.log(window.location.reload())
// }
// reloadPage();


// function toRedirect() {

//     console.log(window.location.href = "https://sr-rs.facebook.com/")
// }
// toRedirect();



// Storage

function toSetItem() {

    window.sessionStorage.setItem("name", "Milan");
    window.sessionStorage.setItem("lastName", "Petrovic");

}
toSetItem();

function toGetItem() {
    window.sessionStorage.getItem("name");
    window.sessionStorage.getItem("lastName");
    
         console.log("There is no data.")
     

}
toGetItem();


function toRemove() {

    window.sessionStorage.removeItem("name")
}
toRemove();




// History
function toHistory(){

    window.history.back(2)
}
toHistory()





// Window Methods


function toMessage() {
   // var win = window.open("https://www.google.com/")
    alert("Welcome to this page");
    var question = prompt("Put the answer")
    var input = confirm("we will submit this answer now ")
    if(true){
        alert("Success!")
    }
    


    
}
toMessage()


function date(){

    alert("Now is very late!");
}
setTimeout(date, 3000)

function time(){
    console.log("night, night, night")
}
setInterval(time, 3000)








// Global JavaScript Objects(homework)

// Math.Random
function toRandom(){

    var arr = [];
    
    
    for(var i = 1; i < 10; i++){
        arr[arr.length] = Math.random() * 50
    }
    return arr
}
console.log(toRandom())

// Math.Round 

function toRound(){

    var arr = [3.56, 6.7, 7.88, 4.45, 34.65];
    var arr2 = new Array()
    for(var i = 0; i < arr.length; i++){

      arr2[arr2.length] = Math.round(arr[i])
    }
    return arr2
}
console.log(toRound());

// Math Floor

var toFloor = function(){

    var arr = [-5.6, 0.34, 5.1, 6.43];
    var newArr = new Array();
    for(var i = 0; i < arr.length; i++){
        newArr[newArr.length] = Math.floor(arr[i])
    }
    return newArr
}
console.log(toFloor())

// Math.max

function maximum(){

    var arr = [-5.6, 0.34, 5.1, 6.43, 33, 100];
    
    for(var i = 0; i < arr.length; i++){
        var max =  Math.max(arr[i])
    }
    return max
    
}
console.log(maximum());



