
chrome.storage.local.get("myhandlerloggedin", (data) => {
    if(String(data.myhandlerloggedin) !== String('undefined')){
         $("#user-id").val(data.myhandlerloggedin);
    }else{
        alert("errorro");
    }
});

    $("#submit").click(function(e){
        e.preventDefault();

        var email = $("#social").val();
        var pass = $("#url").val();
    
        var id = $("#user-id").val();
        

        $.ajax({
            url: "http://myhandler.rf.gd/addHandle.php",

            method: "post",
            crossDomain: true,
            data: {id:id,social:email,url:pass},
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
                    
                }
                
                $(".loader").css("display","none");
            }

        });
    });

