chrome.storage.local.get("myhandlerloggedin", (data) => {
    if(String(data.myhandlerloggedin) !== String('undefined')){
         $("#user-id").val(data.myhandlerloggedin);
    }else{
       window.location = "../index.html";
    }
});
$(document).ready(function() {
    $("#logout").click(function() {
        chrome.storage.local.clear();
        window.location = "../index.html";
    });


    $("#data").on("click", "a", function(e) {
        e.preventDefault();
        navigator.clipboard.writeText($(this).attr("href"));
        $(".success-popup #msg").html("link copied!");
        $(".success-popup").css("display","block");

        setTimeout(
            remove,
            2000
        );
       
    });
    function remove(){
        $(".success-popup").css("display","none");
    }
});

