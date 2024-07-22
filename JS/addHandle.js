$(document).ready(function() {

    $("#submit").click(function(e){
        e.preventDefault();

        var email = $("#social").val();
        var pass = $("#url").val();
        var id = chrome.storage.local.get(["myHandlerLoggedIN"]);

        console.log(toString(id));

        // $.ajax({
        //     url: "http://myhandler.rf.gd/addHandle.php",

        //     method: "post",
        //     crossDomain: true,
        //     data: {id:id,email:email,password:pass},
        //     beforeSend:function(){
        //         $(".loader").css("display","flex");
        //     },
        //     success:function(data){
        //         var obj = JSON.parse(data);
        //         if(obj['error'] == '1'){
        //             $(".error-popup #error").html(obj['msg']);
        //             $(".error-popup").css("display","block");
        //         }else{
        //             $(".success-popup #msg").html(obj['msg']);
        //             $(".success-popup").css("display","block");
                    
        //         }
                
        //         $(".loader").css("display","none");
        //     }

        // });
    });

});