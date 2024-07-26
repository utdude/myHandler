$(document).ready(function() {
    $(".selectSocialoverlay img").on("click", function() {
        var social = $(this).attr("alt")
        var img = $(this).attr("src");
        $("#socialpreview").attr("src",img)
        $("#selectedsocial").val(social);
        $(".selectSocialoverlay").css("display","none");
    })

    $(".selectSocialoverlay #other").on("click", function(){
        $("#newsocialdiv").append('<input type="text" placeholder="Social Handle Name.." id="newsocial" required>');
        $(".selectSocialoverlay").css("display","none");
    })
});