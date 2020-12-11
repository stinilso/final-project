
var maxTime = 5000;
var intervalTime = 1000;
var currentTime = 0;
var calculateScroll;
var displayResultsTimerID;

var currentPosition;
var totalDistanceScrolled;


// 1 second interval timer
function calculateScroll() {
    var newPosition = window.pageYOffset;
    var intervalDistanceScrolled = Math.abs(newPosition - currentPosition);
    totalDistanceScrolled += intervalDistanceScrolled;
    currentPosition = newPosition;
}

// 5 minute timer
function displayResults() {
  clearInterval(checkTimerID);
  alert(totalDistanceScrolled);
}


$("body").append("<button style='width:130px; height:50px; z-index:2147483646; background-color:#d5b941; border-color:#e26e5c; border-width:4px; border-radius:10px; position:fixed; bottom:25px; right:25px; color:#723d46; font-size:18px; font-weight:bold; font-family:'Helvetica';' id='start-button'>Start Scrolling!</button>");
$(document).on("click", "#start-button", function() {
  //alert("test");
  checkTimerID = setInterval(calculateScroll, intervalTime);
  displayResultsTimerID = setTimeout(displayResults, maxTime);
  currentPosition = window.pageYOffset;
  totalDistanceScrolled = 0;
});
