$(document).ready(function () {
    
    var socials = ["Github","X","Gmail","Facebook","Instagram","Linkedin"]

    var id = $("#user-id").val();

   
    $.ajax({

        url: "https://myhandler-git-main-utdudes-projects.vercel.app/getHandles",
        method: "POST",
        crossDomain: true,
        data: {id:id},
        beforeSend:function(){
             $(".loader").css("display","flex");
        },
        success:function(data){
           
            if(data['error'] == '1'){
                $("#data").append("<p>"+data['msg']+"</p>");
                $(".loader").css("display","none");
            }else{
                
                
            
            
            for(let i=0; i<data['msg'].length; i++){
                let socialexists = 0;

                let s = 50;
                var url = data['msg'][i].url;
                var new_url = url;

                if(url.length > s){

                    new_url = url.slice(0,s);
                    new_url+="...";

                }
                for(let j=0; j<socials.length; j++){
                    if(data['msg'][i].social.toUpperCase() === socials[j].toUpperCase()) {socialexists = 1; console.log(socials[j]); break;}
                }
                
                if(socialexists === 1){
                    $("#data").append('<div class="element"><div class="source"><img src="../socialImg/'+data['msg'][i].social+'.png" alt="'+data['msg'][i].social+'" style="height:50px;"></div><div class="url"><a href="'+url+'">'+new_url+'</a></div></div>');

                }else{
                    $("#data").append('<div class="element"><div class="source"><p>'+data['msg'][i].social+'</p></div><div class="url"><a href="'+url+'">'+new_url+'</a></div></div>');

                }

            }
            
            $(".loader").css("display","none");
        }
        }

    });

});