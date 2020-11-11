/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function ()
{
    "use strict";

    $("#send").click(function () {
        var x = {
            Position: $("#position").val(),
            Name: $("#name").val().replace("\n", " "),
            Email: $("#email").val().replace("\n", " "),
            Phone: $("#phone").val().replace("\n", " "), 
            Country: $("#country").val().replace("\n", " "), 
            Address: $("#address").val().replace("\n", " ").replace("  ", " "),
            Zip: $("#zip").val(),
            University: $("#affiliation").val().replace("\n", " ")
            };
        
            var finalString = "";

            for(var key in x){
            finalString += key + "=" + x[key] + "&";
            }

            finalString = finalString.slice(0, -1);

            console.log(finalString);

        console.log(JSON.stringify(x));
        sendEmail();
        $.getJSON('https://script.google.com/macros/s/AKfycbxP7rlcMo1OXWMm8rq42I5t3_P5syrTicFUJKR7saPa3EzHdvM/exec?'+finalString, function(r) {
            
            if(r.result == "success")
                console.log(r.row);
            else
                console.log(r.error);

        });
        /*$.ajax({
            url: "https://script.google.com/macros/s/AKfycbxP7rlcMo1OXWMm8rq42I5t3_P5syrTicFUJKR7saPa3EzHdvM/exec",
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
        });*/
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