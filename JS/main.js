$(document).ready(function() {
    $("#logout").click(function() {
        chrome.storage.local.remove("myHandlerLoggedIN");
        window.location = "../index.html";
    });
});