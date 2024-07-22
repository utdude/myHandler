$(document).ready(function() {
    $("#submit").click(function(e){
        e.preventDefault();

        var email = $("#email").val();
        var pass = $("#pass").val();

        $.ajax({
            url: "http://myhandler.rf.gd/Login.php",

            method: "post",
            crossDomain: true,
            data: {email:email,password:pass},
            beforeSend:function(){
                $(".loader").css("display","flex");
            },
            success:function(data){
                var obj = JSON.parse(data);
                if(obj['error'] == '1'){
                    $(".error-popup #error").html(obj['msg']);
                    $(".error-popup").css("display","block");
                }else{
                    $(".success-popup #msg").html(obj['msg']);
                    $(".success-popup").css("display","block");
                    var id = toString(obj['msg']);
                    chrome.storage.local.set({"mymyHandlerLoggedIN":id});
                    window.location = "./pages/main.html";
                }
                
                $(".loader").css("display","none");
            }

        });
    });

    $("#signupRedirect").click(function() {
        window.location = "./Pages/SignUp.html";
    });
});