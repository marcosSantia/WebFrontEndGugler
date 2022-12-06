'use strict';

console.log('Hola Mundo');

$(document).ready(function () {

    $('.btn_menu').hover(
        function () {
            $('.btn_menu').css('font-size', '20px');
        },
        function () {
            $('.btn_menu').css('font-size', '');
        }
    );

    $('#tituloPrincipal').click(function () {
        $(this).css('color', 'red');
    });

    $('h4').click(function () {
        $(this).css('color', 'red');
    });

    $("#btn_contacto").click(function () {
        $("#sectionForm").show();
        $("#sectionHome").hide();
    });

    $("#btn_home").click(function () {
        $("#sectionForm").hide();
        $("#sectionHome").show();
    });

    $('input').keypress(function (event) {
        let letra = event.key;
        $('#datoInput').append(letra);
    });

    $('#submit_form').click(function (e) {
        let valInput = $("#nya").val();
        let valText = $("#consulta").val();
        if (valInput.length == 0 || valText.length == 0) {
            e.preventDefault
            alert("Campos vacios");
        }
    });



});