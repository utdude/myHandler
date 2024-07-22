$(document).ready(function() {

    chrome.storage.local.get("myHandlerLoggedIN", (data) =>{
        if(typeof data === 'undefined'){

        }else{
            window.location = "./pages/main.html";
        }
    })
    // if(chrome.storage.local.get(['myHandlerLoggedIN']) != null){
    //     window.location = "./pages/main.html";
    // }else{

    // }
});