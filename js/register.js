/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function ()
{
    "use strict";
    $("#send").click(function () {
        var x = {position: $("#position").val(), nom: $("#name").val().replace("\n", " "), _id: $("#email").val().replace("\n", " "), phone: $("#phone").val().replace("\n", " "), country: $("#country").val().replace("\n", " "), address: $("#address").val().replace("\n", " ").replace("  ", " "), zip: $("#zip").val(), university: $("#affiliation").val().replace("\n", " ")};
        console.log(JSON.stringify(x));
        sendEmail();
        $.ajax({
            url: "/app",
            dataType: 'json',
            contentType: "application/json",
            type: 'GET',
            data: x,
            success: function (data, textStatus, jqXHR) {
                console.log(data);
            },
            error: function (data, jqXHR, textStatus, errorThrown) {
                console.log(data);
            }
        });
    });

    function sendEmail() {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "mohamed.lachgar@ced.uca.ac.ma",
            Password: "",
            To: 'lachgar.m@gmail.com',
            From: "mohamed.lachgar@ced.uca.ac.ma",
            Subject: "New Registration from ",
            Body: "Well that was easy!!"
        }).then(function (message) {
                    message => alert(message);
         });
    }


});