/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function ()
{
    "use strict";

    $("#send").click(function () {
        var x = {'position': $("#position").val(), 'nom': $("#name").val(), 'email': $("#email").val(), 'phone': $("#phone").val(), 'country': $("#country").val(),'address': $("#address").val(), 'zip': $("#zip").val(), 'university': $("#affiliation").val()};
        console.log(JSON.stringify(x));
        $.ajax({
            url: "http://localhost:3000/",
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