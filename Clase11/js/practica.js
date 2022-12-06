'use strict';



$(document).ready(function(){
    /* Agregue una función que permita aumentar el tamaño de letra de los items del menú superior
cuando el cursor del mouse pasa sobre dichos elementos. De forma contraria, el tamaño de letra
debe volver a su valor original cuando el cursor del mouse sale del elemento. */
    $('#btn_home').hover(function(){
        $(this).css('font-size', '30px');
    } , function(){
        $(this).css('font-size', '18px');
    });


});