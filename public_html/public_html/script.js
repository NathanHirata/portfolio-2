$("document").ready(function() {

    $(".yeah").css("background-color", "silver");

    $(".projectColor").css("background-color", "lightblue");

    $(".k").css("color", "white");



//this is code to activate my buttons

    $('replaceWText').bind('click', replaceWText);

    $('#slideAway').bind('click', slideTheImage);

    $('#showLogo').bind('click', showTheImage);

    $('#hideLogo').bind('click', hideTheImage);

    $('#showLogov2').bind('click', showTheImagev2);

    $('#hideLogov2').bind('click', hideTheImagev2);



//this is my accordion for my links
    $('#superHumans').accordion({header: "h3"});

});


//these are the functions for my buttons
function slideTheImage() {
    $('#logo').slideUp(2500);
}

function showTheImage() {
    $('#logo').show('fold', {}, 2500);
}

function hideTheImage() {
    $('#logo').hide('fold', {}, 2500);
}

function showTheImagev2() {
    $('#logo').show('explode', {}, 2500);
}

function replaceWText() {
    $('#replaceWtext').text('Replaced!');
}

function hideTheImagev2() {
    $('#logo').hide('explode', {}, 2500);
}

$("document").ready(function() {
    $(".red").css("background-color", "darkblue");
});

$("document").ready(function() {
    $(".yeah").css("color", "white");
});

$("document").ready(function() {
    $('.no').bind('click', alertButtonClick);
});

function alertButtonClick() {
    alert("SIKE THATS THE WRONG NUMBER");
}

//this is the fucntion when i hover over the phone number at the top of my jquery page 

$("document").ready(function() {

    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    $('h1').bind('click', mouseClick);
});

function mouseOverMe() {
    $("h1").html("SIKE THATS THE WRONG NUMBER");
}