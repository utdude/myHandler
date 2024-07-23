$(document).ready(function () {
    
    var id = $("#user-id").val();

   
    $.ajax({

        url: "http://myhandler.rf.gd/getHandle.php",
        method: "POST",
        crossDomain: true,
        data: {id:id},
        beforeSend:function(){
            // $(".loader").css("display","flex");
        },
        success:function(data){
            var obj = JSON.parse(data);
            // if(obj['error'] == '1'){
            //     $(".error-popup #error").html(obj['msg']);
            //     $(".error-popup").css("display","block");
            // }else{
            //     $(".success-popup #msg").html(obj['msg']);
            //     $(".success-popup").css("display","block");
                
            // }

            for(let i=0; i<obj['msg'].length; i++){

                let s = 50;
                var url = obj['msg'][i][2];
                var new_url = url;

                if(url.length > s){

                    new_url = url.slice(0,s);
                    new_url+="...";

                }

                $("#data").append('<div class="element"><div class="source"><p>'+obj['msg'][i][1]+'</p></div><div class="url"><a href="'+url+'">'+new_url+'</a></div></div>');
            }
            
            $(".loader").css("display","none");
        }

    });

});