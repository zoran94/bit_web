// var images = document.querySelector('div');
// var addDog = document.querySelector('button');
// var newReq = new XMLHttpRequest();
// function createImage() {

//     newReq.open('GET', 'https://dog.ceo/api/breeds/image/random');

//     newReq.send();

//     newReq.onload = function () {

//         if (newReq.status >= 200 && newReq.status < 400) {
//             var randomDog = JSON.parse(newReq.responseText);
//             var imgElement = document.createElement('img');
//             imgElement.setAttribute('src', randomDog.message);
//             images.appendChild(imgElement);


//         } else {
//             console.log('Returned an error!');
//         }

//     }

//     newReq.onerror = function () {
//         console.log('Connection not established!');
//     }
// }


// var main = (function () {
//     addDog.addEventListener('click', createImage);
// })();





// var image = document.querySelector("div");
// var button = document.querySelector("button");
// var makeNewReq = new XMLHttpRequest();


// function addImages() {
//     makeNewReq.open("GET", "https://api.thecatapi.com/v1/images/search");

//     makeNewReq.setRequestHeader('x-api-key', '3ad5b1be-9644-4e5d-b3a6-56a8dc342ba6');
//     makeNewReq.onload = function () {
//         if (makeNewReq.status >= 200 && makeNewReq.status < 400) {
//             var getData = JSON.parse(makeNewReq.responseText);
//             var newElem = document.createElement("img");
//             newElem.setAttribute("src", getData[0].url);
//             image.appendChild(newElem);
//             // console.log(getData);

//             //console.log(getData);
//         } else {
//             console.log('Returned an error!');
//         }
//     }
//     makeNewReq.onerror = function () {
//         console.log('Connection error!');
//     }
//     makeNewReq.send();
// }


// button.addEventListener("click", addImages);


