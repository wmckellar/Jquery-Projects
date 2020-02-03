$(document).ready(function () {


})
$("body").append("<ul>" + "</ul>");
function notify() {
    alert($("#text-input").val());
    $("ul").append("<div><li>" + $("#text-input").val() + "</li></div>")
    // $("h2").mouseover(function () {
    //     $("h2").css({"background-color": "yellow",});
    //     $("h2").css("border", "3px solid green");
    // });
}
$("#btnSubmit").on("click", notify);

$("li").on("click", setRandomColor);

function getRandomColor () {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0, i < 6, i++) {
        color+= letters[Math.floor(Math.random() * 16)]
    }
    return color;
}

function setRandomColor () {
    $("#colorpad").css("background-color", getRandomColor () );
}

$("ul").on("dblclick", function () {
    $("ul").remove"ul");
})

$("#text-input").keyup(function () {
    if ($('#text-input').val() === '') {
        $("#btnSubmit").prop("disabled", true);
    } else {
        $("#btnSubmit").prop("disabled", false);
    }
});






