// content.js
// alert("Hi! This is the annoying extension prototype test.");

$("body").append("<button style='width:130px; height:50px; z-index:2147483646; background-color:#d5b941; border-color:#e26e5c; border-width:4px; border-radius:10px; position:fixed; bottom:25px; right:25px; color:#723d46; font-size:18px; font-weight:bold; font-family:'Helvetica';' id='start-button'>Click here!</button>");
$(document).on("click", "#start-button", function() {
  alert("test");
});

// "<button style='z-index:2147483646; background-color:red; position:fixed; bottom:0px; right:0px;' id='stine-button'>Click here!</button>"
