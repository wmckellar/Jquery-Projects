let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentNumber = 0;
let letterSpot = 0;
let currentSpot = sentences[sentNumber];
let currentLetter = currentSpot[letterSpot];

$('#sentence').text(currentSpot);
$('#target-letter').text(currentLetter);
$('#keyboard-upper-container').hide();

$(document).keydown(function(e) {
    if(e.keyCode === 16) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
});

$(document).keyup(function(e) {
    $('.highlight').removeClass('highlight');
    if(e.keyCode === 16) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
});

$(document).keypress(function (e) {
    $('#' + e.keyCode).addClass('highlight');
    if (currentSpot.charCodeAt(currentLetter) == e.keyCode) {
        $("#feedback").append('<span class ="glyphicon glyphicon-ok"></span>');
    } 
    else {
        $("#feedback").append('<span class ="glyphicon glyphicon-remove"></span>');
    };
    $("#yellow-block").css("left", "+=17.5");
});