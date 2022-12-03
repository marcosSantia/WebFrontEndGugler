'use strict';


$(document).ready(function(){

    $('button').hover(
        function(){
            alert("el cursor ha entrado al elemento");
        },
        function(){
            alert("el cursor ha salido del elemento");
        }
    );
});