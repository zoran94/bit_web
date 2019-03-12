

var images = ["https://dumielauxepices.net/sites/default/files/medicine-clipart-alternative-medicine-679661-6930158.jpg", "https://dumielauxepices.net/sites/default/files/medicine-clipart-alternative-medicine-679661-6930158.jpg", "https://dumielauxepices.net/sites/default/files/medicine-clipart-alternative-medicine-679661-6930158.jpg"];
$("body").append("<div class = firstDiv></div>");


$.each(images, function (i, element) {
    $(".firstDiv").append('<img src=' + element + ' />');
    $("img").css("width", "33%");
    $("img:first").addClass("selected");
})

$("body").append("<div class = secDiv></div>");
$.each(images, function (i, element) {
    $(".secDiv").append("<img src = " + element + "/>");
    $("img").css("width", "33%");
});
$(function () {
    $(".firstDiv").children().removeClass("selected")
    $(".secDiv").children("img:first").next().addClass("selected")
});