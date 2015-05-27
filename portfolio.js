var main = function () {
  "use strict";
  var main = function () {
    $("#worklink").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 2000);
    }
    
    $("#aboutlink").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
    }
    
    $("#homelink").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 2000);
    }
    
    $("#contactlink").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
    }
    
}
   

$("document").ready(main);