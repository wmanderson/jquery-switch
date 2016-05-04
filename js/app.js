$(document).ready(function() {


    $(document).on("click", "#change-red", function() {
        $("#div-red").css("background-color", "#D9534F");
    });

    $(document).on("click", "#change-green", function() {
        $("#div-green").css("background-color", "#5CB85C");
    });

    $(document).on("click", "#change-blue", function() {
        $("#div-blue").css("background-color", "#337AB7");
    });

    $(document).on("click", "#make-big", function() {
        $("#div-big").toggleClass("big");
    });

    $(document).on("click", "#make-small", function() {
        $("#div-small").toggleClass("small");
    });

    $(document).on("click", "#animate-div", function() {
        $("#div-animate").css("transform", "rotate(360deg)");
    });

    $(document).on("click", "#create-overlay", function() {
        $("#overlay").addClass("show");
    });

    $(document).on("click", "#create-overlay", function() {
        $("#modal-login").addClass("show");
    });

    $(document).on("click", "#close-overlay", function() {
        $("#modal-login").removeClass("show");
        $("#modal-login").addClass("hide");
    });

    $(document).on("click", "#close-overlay", function() {
        $("#overlay").removeClass("show");
        $("#overlay").addClass("hide");

    });














});
