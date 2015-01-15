$("document").ready(function(){
    
    $(".yeah").css("background-color", "darkblue");
    
    $(".projectColor").css("background-color", "lightblue");
    
    $(".k").css("color", "white");
    
    
    
    
    
    $('replaceWText').bind('click', replaceWText);
    
    $('#slideAway').bind('click', slideTheImage);
    
    $('#showLogo').bind('click', showTheImage);
    
    $('#hideLogo').bind('click', hideTheImage);
    
    $('#showLogov2').bind('click', showTheImagev2);
    
    $('#hideLogov2').bind('click', hideTheImagev2);
    
    
    
    
    $('#superHumans').accordion({header: "h3"});

});

function slideTheImage() {
    $('#logo').slideUp(2500);
}

function showTheImage() {
    $('#logo').show('fold', {},2500);
}

function hideTheImage() {
    $('#logo').hide('fold', {},2500);
}

function showTheImagev2() {
    $('#logo').show('explode', {},2500);
}

function replaceWText() {
    $('#replaceWtext').text('Replaced!');
}

function hideTheImagev2() {
    $('#logo').hide('explode', {},2500);
}

$("document").ready(function(){
    $(".red").css("background-color", "lime");
});

$("document").ready(function(){
    $(".yeah").css("color", "white");
});

$("document").ready(function(){
    $('.no').bind('click', alertButtonClick);
});

function alertButtonClick() {
    alert("SIKE THATS THE WRONG NUMBER");
}

$("document").ready(function(){
    
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('h1').bind('click', mouseClick);
});

function mouseOverMe() {
    $("h1").html("SIKE THATS THE WRONG NUMBER");
}

function mouseOutMe() {
    $('h1').html('SIKE THATS THE WRONG NUMBER');
}

function mouseClick() {
    $('p').html('Harder Johnny');
}



