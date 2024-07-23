    chrome.storage.local.get("myhandlerloggedin", (data) =>{
        if(String(data.myhandlerloggedin) !== String('undefined')){
            window.location = "./pages/main.html";
            
        }else{
            
        }
    });
    // if(chrome.storage.local.get(['myHandlerLoggedIN']) != null){
    //     window.location = "./pages/main.html";
    // }else{

    // }
