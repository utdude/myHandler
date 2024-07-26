$(document).ready(function() {
    $("#submit").click(function(e){
        e.preventDefault();

        var email = $("#email").val();
        var pass = $("#pass").val();

        $.ajax({
            url: "https://myhandler-git-main-utdudes-projects.vercel.app/Login",

            method: "post",
            crossDomain: true,
            data: {email:email,password:pass},
            beforeSend:function(){
                $(".loader").css("display","flex");
            },
            success:function(data){
                
                if(data['error'] == '1'){
                    $(".error-popup #error").html(data['msg']);
                    $(".error-popup").css("display","block");
                }else{
                    $(".success-popup #msg").html("Logged in successfully!");
                    $(".success-popup").css("display","block");
                    window.location = "./pages/main.html";
                    var id = data['msg'];
                    chrome.storage.local.set({"myhandlerloggedin":String(data['msg'])});

                   
                     
                }
                
                $(".loader").css("display","none");
            }

        });
    });

    $("#signupRedirect").click(function() {
        window.location = "./Pages/SignUp.html";
    });
});