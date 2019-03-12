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



$("img").each(function (index, element) {
    $(element).attr("src", "http://pbs.twimg.com/profile_images/514780508392148993/dpNt8McB_400x400.jpeg");
    var randomWidth = Math.random() * 500;
    var randomHeight = Math.random() * 500;

    var width = $(element).css("width", randomWidth + "px");
    var height = $(element).css("height", randomHeight + "px");
    console.log(element)
    if (randomWidth < 200) {
        $(element).css("border", "5px solid green")
    } else {
        return false;
    }





});


