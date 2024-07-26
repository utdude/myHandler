$(document).ready(function () {
    
    var id = $("#user-id").val();

   
    $.ajax({

        url: "https://myhandler-git-main-utdudes-projects.vercel.app/getHandles",
        method: "POST",
        crossDomain: true,
        data: {id:id},
        beforeSend:function(){
            // $(".loader").css("display","flex");
        },
        success:function(data){
           
            // if(data['error'] == '1'){
            //     $(".error-popup #error").html(data['msg']);
            //     $(".error-popup").css("display","block");
            // }else{
            //     $(".success-popup #msg").html(data['msg']);
            //     $(".success-popup").css("display","block");
                
            // }

            for(let i=0; i<data['msg'].length; i++){

                let s = 50;
                var url = data['msg'][i].url;
                var new_url = url;

                if(url.length > s){

                    new_url = url.slice(0,s);
                    new_url+="...";

                }

                $("#data").append('<div class="element"><div class="source"><p>'+data['msg'][i].social+'</p></div><div class="url"><a href="'+url+'">'+new_url+'</a></div></div>');
            }
            
            $(".loader").css("display","none");
        }

    });

});