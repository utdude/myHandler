$(document).ready(function() {
    $("#submit").click(function(e){
        e.preventDefault();

        var email = $("#email").val();
        var pass = $("#pass").val();
        var cpass = $("#cpass").val();

        if(pass === cpass){


            $.ajax({
                url: "https://myhandler-git-main-utdudes-projects.vercel.app/Register",
    
                method: "post",
                crossDomain: true,
                data: {email:email,password:pass},
                beforeSend:function(){
                    $(".loader").css("display","flex");
                },
                success:function(data){
                    // var obj = JSON.parse(data);
                    if(data['error'] == '1'){
                        $(".error-popup #error").html(data['msg']);
                        $(".error-popup").css("display","block");
                    }else{
                        $(".success-popup #msg").html(data['msg']);
                        $(".success-popup").css("display","block");
                        
                        var id = data['msg'];
                        chrome.storage.local.set({"myhandlerloggedin":String(data['msg'])});

                        window.location = "main.html";
                    }
                    
                    $(".loader").css("display","none");
                }
    
            });

           
        }else{
            $(".error-popup #error").html("Password does not match with Confirm password field.");
            $(".error-popup").css("display","block");

           

        }


        
    });

    $("#loginRedirect").click(function() {
        window.location = "../index.html";
    });
});