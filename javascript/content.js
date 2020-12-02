// content.js
alert("Hi! This is the annoying extension prototype test.");

$(browser.icon).click(function() {
  $(body).append("button");
  $("button").css("background-color", "#d5b941");
});
