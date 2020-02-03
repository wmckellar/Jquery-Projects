let kuc = $('#keyboard-upper-container');
let changeKeyboard = $('#changeKeyboard');
let keyClass = $('.text center keyboard-container');
let klc = $('#keyboard-lower-container');
let shifted = false;
let completed = false;
let currentSen = 0;
let currentLet = 0;
let keyList = $('.key');
let spaceBar = $('#32')
let sentence = $('#sentence')
let target = $('#target-letter')
let score = $('#points')

$("#keyboard-upper-container").hide();

$(document).keydown(function (event) {
    if (event.which === 16) {
        $("#keyboard-lower-container").hide();
        $("#keyboard-upper-container").show();
    }
});

$(document).keyup(function (event) {
    $("#keyboard-lower-container").show();
    $("#keyboard-upper-container").hide();
});
$(document).keypress(function highlight(event) {
    let id = $(`#${event.which}`)
    if (event.keycode != 0) {
        $(id).css("background-color", "yellow");
    };
    $(document).keyup(function nonhighlight(event1) {
        if (event1.keycode = id) {
            $(id).css("background-color", "");
        };
    })
});

$("body").append(function sent() {

    $(sentence).append(function lines() {
        let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
        let sentenceCounter = 0;
        if (sentenceCounter == 0) {
            $(sentence).append(sentences[0]);
        }
        else if (sentenceCounter == 1) {
            $(sentence).append(sentences[1]);
        }
        else if (sentenceCounter == 2) {
            $(sentence).append(sentences[2]);
        }
        else if (sentenceCounter == 3) {
            $(sentence).append(sentences[3]);
        }
        else if (sentenceCounter == 4) {
            $(sentence).append(sentences[4]);
        }
    });

    
    $(document).keyup(function (e) {
        if (e.keyCode == 16) {
            klc.toggle(1000);
            kuc.toggle(1000);
            shifted = false
        }
    });
})


let highlight = $('#yellow-block');
let highlightClone = $('#yellow-block');
let input = $('#answer')
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let senCount = 0;
let letCount = 0;
let letter = sentences[senCount][letCount]
let points = 0
currentLet = letter - 1

let count = 0

$(document).keypress(function (e) {
    // start = new Date();
    console.log(e.key)
        for (i = 0; i < keyList.length; i++) {
            if (e.key == keyList[i].innerText) {
                $(keyList[i]).css("background", "yellow")
                if (e.key != letter) {
                    alert('Not Correct')
                    points--
                    score.html(points)
                    $("#feedback").append('<span class ="glyphyicon glyphicon-remove"></span>');
                }
                if (e.key == letter) {
                    highlight.appendTo(letter)
                    $("#yellow-block").css("left", "+=17.5");
                    target.html(letter)
                    letCount++
                    letter = sentences[senCount][letCount]
                    points++
                    score.html(points)
                    console.log(sentences[0].length)
                    count++
                    console.log(count)
                    $("#feedback").append('<span class ="glyphicon glyphicon-ok"></span>');
                }
                if (e.key == 32) {
                    $("#yellow-block").css("left", "+=17.5");
                    letter = sentences[semCount][letCount]
                    letCount++
                    highlight.append(' ')
                    target.html('space')
                    console.log(e.key)
                }
                if (letCount == sentences[0].length +1) {
                    highlight.empty();
                    highlight.css({
                        'background-color': 'yellow',
                        'height': '40px',
                        'width': 'auto',
                        'position': 'absolute',
                        'border': '3px solid black',
                        'display': 'flex',
                        'justify-content': 'center',
                        'align-items': 'center'
                        
                    })
                    senCount = 1;
                    sentence.html(sentences[1])
                    letCount = 0;
                    letter = sentences[1][letCount]


                }
                if (senCount == 1 && letCount == sentences[1].length) {
                    highlight.empty();
                    highlight.css({
                        'background-color': 'yellow',
                        'height': '40px',
                        'width': 'auto',
                        'position': 'absolute',
                        'border': '3px solid black',
                        'display': 'flex',
                        'justify-content': 'center',
                        'align-items': 'center'
                    })
                    senCount = 2;
                    sentence.html(sentences[2])
                    letCount = 0;
                    letter = sentences[2][letCount]


                }
            }
        }
    // end = new Date ();
    // time = end-start;
    
    })
    $(document).keyup(function (e) {
        for (i = 0; i < keyList.length; i++) {
            if (event.key == keyList[i].innerText) {
                $(keyList[i]).css("background", "")
            }
        }
    })





