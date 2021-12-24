$(document).ready(function () {

    $(".box1, .box1-panel").unbind().hover(function () {
        $(".box1-panel").slideDown("fast");
        $(".box2-panel").slideUp("fast");
        $(".box3-panel").slideUp("fast");
        $(".box4-panel").slideUp("fast");
    });

    $(".box2").unbind().hover(function () {
        $(".box2-panel").slideDown("fast");
        $(".box1-panel").slideUp("fast");
        $(".box3-panel").slideUp("fast");
        $(".box4-panel").slideUp("fast");
    });


    $(".box3").unbind().hover(function () {
        $(".box3-panel").slideDown("fast");
        $(".box1-panel").slideUp("fast");
        $(".box2-panel").slideUp("fast");
        $(".box4-panel").slideUp("fast");
    });

    $(".box4").unbind().hover(function () {
        $(".box4-panel").slideDown("fast");
        $(".box1-panel").slideUp("fast");
        $(".box2-panel").slideUp("fast");
        $(".box3-panel").slideUp("fast");
    });

});