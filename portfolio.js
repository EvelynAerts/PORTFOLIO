var main = function () {
  "use strict";
  
    $("#homelink").on("click",function( e ) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $( $(this).attr("#home")).offset().top
    }, 2000);
    
    
    $("#contactlink").on("click",function( e ) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $( $(this).attr("#contact")).offset().top
    }, 2000);


    $("#aboutlink").on("click",function( e ) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $( $(this).attr("#about")).offset().top
    }, 2000);

    $("#worklink").on("click",function( e ) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $( $(this).attr("#work")).offset().top
    }, 2000);

    
 
    $("#go-top").on("click",function( e ) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $( $(this).attr("#top")).offset().top
    }, 2000);
            
    
});
   

$("document").ready(main);