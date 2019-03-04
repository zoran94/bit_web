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
    // if (window.sessionStorage.length === false) {
    //     console.log("There is no data.")
    // }

}
toGetItem();


function toRemove() {

    window.sessionStorage.removeItem("name")
}
toRemove();




// History








// Window Methods


function toMessage() {

    alert("Welcome to this page");
    var users = prompt("Let say something!");

    var input = confirm("we will submit this answer now");

    console.log(users)
}
toMessage()