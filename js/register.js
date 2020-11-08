/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function ()
{
    "use strict";

    $("#send").click(function () {
        var x = {position: $("#position").val(), nom: $("#name").val().replace("\n", " "), email: $("#email").val().replace("\n", " "), phone: $("#phone").val().replace("\n", " "), country: $("#country").val().replace("\n", " "),address: $("#address").val().replace("\n", " "), zip: $("#zip").val(), university: $("#affiliation").val().replace("\n", " ")};
        console.log(JSON.stringify(x));
        $.ajax({
            url: "/app",
            dataType : 'json',
            contentType : "application/json",
            type: 'GET',
            data: x,
            success: function (data, textStatus, jqXHR) {
                console.log(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
        });
    });

});