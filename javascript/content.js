
var maxTime = 10000;
var intervalTime = 1000;
var currentTime = 0;
var calculateScroll;
var displayResultsTimerID;
var currentPosition;
var totalPixelsScrolled;
var totalFeetScrolled;
var feetPerPixel = 0.00086805544619423;


// Scroll calculator with 1 second interval timer
function calculateScroll() {
    var newPosition = window.pageYOffset;
    var intervalPixelsScrolled = Math.abs(newPosition - currentPosition);
    totalPixelsScrolled += intervalPixelsScrolled;
    totalFeetScrolled = totalPixelsScrolled * feetPerPixel;
    currentPosition = newPosition;
}

// 5 minute timer
function displayResults() {
  clearInterval(checkTimerID);
  alert(totalDistanceScrolled);
  $("body").append(modal.html);
}


$("body").append("<button style='width:130px; height:50px; z-index:2147483646; background-color:#d5b941; border-color:#e26e5c; border-width:4px; border-radius:10px; position:fixed; bottom:25px; right:25px; color:#723d46; font-size:14px; font-weight:bold; font-family:'Helvetica';' id='start-button'>Start Scrolling!</button>");
$(document).on("click", "#start-button", function() {
  //alert("test");
  checkTimerID = setInterval(calculateScroll, intervalTime);
  displayResultsTimerID = setTimeout(displayResults, maxTime);
  currentPosition = window.pageYOffset;
  totalDistanceScrolled = 0;
});
