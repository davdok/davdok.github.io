
jQuery(document).ready(function() {

    /*
        Fullscreen background

        ADD AB TESTS ON BACKGROUND?
    */


    var back= [
    "assets/img/backgrounds/beach.jpg"
    ,"assets/img/backgrounds/desk.jpg"
    ,"assets/img/backgrounds/mac.jpg"
    ,"assets/img/backgrounds/miami.jpg"
    ,"assets/img/backgrounds/notebook.jpg"
    ,"assets/img/backgrounds/sea.jpg"
    ,"assets/img/backgrounds/table.jpg"
    ,"assets/img/backgrounds/van.jpg"
    ,"assets/img/backgrounds/work.jpg"
    ,"assets/img/backgrounds/work3.jpg"];

    $.backstretch([pickRandom(back)]);


});
