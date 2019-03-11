//$(console.log("Hello world"));

$(function () {
    console.log("Hello word")
});

////// Example 
// $(function () {

//     $("li:first").replaceWith("<li>Replaced Element</li>");
//     $("li.active").html("<p>This is special list item!</p>");
//     $('li:last').remove();
//     $("ul").hide().delay(500).fadeIn(1500);
// })



// Selecting

$(function () {

    $("li:first").addClass("border");
    $("li").addClass("transform");
    $("li.active").addClass("color");

});




// Inserting Elements

$("div").prepend("<p>Amazing Galery</p>");

//var images = $("<img src='http://pbs.twimg.com/profile_images/514780508392148993/dpNt8McB_400x400.jpeg'><img src='http://pbs.twimg.com/profile_images/514780508392148993/dpNt8McB_400x400.jpeg'><img src='http://pbs.twimg.com/profile_images/514780508392148993/dpNt8McB_400x400.jpeg'>")
//images.appendTo("div");

$("img").each(function (index, element) {
    $(element).attr("src", "http://pbs.twimg.com/profile_images/514780508392148993/dpNt8McB_400x400.jpeg");
    var randomWith = Math.random() * 500 + "px";
    var randomHeight = Math.random() * 500 + "px";

    var width = $(element).css("width", randomWith);
    var height = $(element).css("height", randomHeight);

})