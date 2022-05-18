$(document).ready(function () {

    $("input[type='submit']").click(function (e) {
        e.preventDefault();

        var username = $('#username').val()
        var password = $('#password').val()
        if (username == "new_user" && password == "123456789") {


            let newParagraph = $("<p>Successful login!</p>");
            $("#login-container").append(newParagraph);


            let color = $("#username").css("border", "2px solid green");
            console.log("color green");

            let color1 = $("#password").css("border", "2px solid green");
            console.log("color green");


             $("input[type='submit']").click(function () {

                 $(".fa-check").show();

             });


            console.log("Successful login!")
        } else if (username === "" && password === "") {


            let newParagraph = $("<p>*Please, enter username</p>");
            $("#login-container").append(newParagraph);

            let newParagraph1 = $("<p>*Please, enter password</p>");
            $("#login-container").append(newParagraph1);


            let color = $("#username").css("border", "2px solid red");
            console.log("color red");
            let color1 = $("#password").css("border", "2px solid red");
            console.log("color red");


            $("input[type='submit']").click(function () {

                $(".fa-xmark").show();

            });

            console.log("please enter username")
            console.log("please enter password")
        }
        else if (username === "new_user" && password === "") {


            let newParagraph = $("<p>*Enter a password</p>");
            $("#login-container").append(newParagraph);



            let color = $("#username").css("border", "2px solid green");
            console.log("color green");
            let color1 = $("#password").css("border", "2px solid red");
            console.log("color red");


            console.log("enter a password")
        }
        else if (username === "" && password === "123456789") {

            let newParagraph = $("<p>*Enter a username</p>");
            $("#login-container").append(newParagraph);


            let color = $("#username").css("border", "2px solid red");
            console.log("color red");
            let color1 = $("#password").css("border", "2px solid green");
            console.log("color green");


            console.log("please enter username")
        }
        else if (username != "new_user" && password != "123456789") {

            let newParagraph = $("<p>*Please, enter a valid username</p>");
            $("#login-container").append(newParagraph);

            let newParagraph1 = $("<p>*Please, enter a valid password</p>");
            $("#login-container").append(newParagraph1);


            $("input[type='submit']").click(function () {

                $(".fa-xmark").show();

            });

            let color = $("#username").css("border", "2px solid red");
            console.log("color red");
            let color1 = $("#password").css("border", "2px solid red");
            console.log("color red");

            console.log("please enter a valid username")
            console.log("please enter a valid password")
        }
        else if (username != "new_user") {

            let newParagraph = $("<p>*Please, enter a valid username</p>");
            $("#login-container").append(newParagraph);



            let color = $("#username").css("border", "2px solid red");
            console.log("color red");
            let color1 = $("#password").css("border", "2px solid green");
            console.log("color green");


            console.log("please enter a valid username")
        }
        else if (password != "123456789") {

            let newParagraph = $("<p>*Please, enter a valid password</p>");
            $("#login-container").append(newParagraph);


            let color = $("#username").css("border", "2px solid green");
            console.log("color green");
            let color1 = $("#password").css("border", "2px solid red");
            console.log("color red");


            console.log("please enter a valid password")
        }
    })


})

