
chrome.storage.local.get("myhandlerloggedin", (data) => {
    if(String(data.myhandlerloggedin) !== String('undefined')){
         $("#user-id").val(data.myhandlerloggedin);
    }else{
        alert("errorro");
    }
});

    $("#addhandlesubmit").click(function(e){
        e.preventDefault();

        var social = $("#selectedsocial").val();

        if(social === ""){
            social = $("#newsocial").val();
        }
        var url = $("#url").val();
    
        var id = $("#user-id").val();
        

        $.ajax({
            url: "https://myhandler-git-main-utdudes-projects.vercel.app/addHandles",

            method: "post",
            crossDomain: true,
            data: {id:id,social:social,url:url},
            beforeSend:function(){
                $(".loader").css("display","flex");
            },
            success:function(data){
                
                if(data['error'] == '1'){
                    $(".error-popup #error").html(data['msg']);
                    $(".error-popup").css("display","block");
                }else{
                    $(".success-popup #msg").html(data['msg']);
                    $(".success-popup").css("display","block");
                    window.location = "main.html";
                }
                
                $(".loader").css("display","none");
            }

        });
    });

