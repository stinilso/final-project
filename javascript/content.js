
/*jshint multistr: true */
var createButton = " \
<button style=' \
width:130px; \
height:50px; \
z-index:2147483646; \
background-color:#d5b941; \
border-color:#e26e5c; \
border-width:4px; \
border-radius:10px; \
position:fixed; \
bottom:25px; \
right:25px; \
color:#723d46; \
font-size:14px; \
font-weight:bold; \
font-family:'Helvetica';' \
id='sc-start-button'> \
Start Scrolling! \
</button>";

var modalHTML = "<!-- Outer box color --> \
    <div class='sc-outer-box'> \
      <!-- Inner box color --> \
      <div class='sc-inner-box'> \
        <!-- Button to close modal --> \
        <div class='sc-exit-button'> \
        <p id='sc-exit-button-x'>x</p> \
        </div> \
        <!-- Popup text --> \
        <div class='sc-modal-text'> \
          <h3 class='sc-accent-font'>The Scroll Calculator</h3> \
          <h1>Results</h1> \
          <p class='sc-results-text'>You have scrolled approximately</p> \
          <div class='sc-highlight-box'> \
            <h2 id='sc-results-number'></h2> \
          </div> \
          <p class='sc-results-text'>in the last 5 minutes!</p> \
        </div> \
      </div> \
    </div>";

var modalCSS = "<style> \
@font-face { \
  font-family: 'Anton'; \
  src: url('../css/Anton/Anton-regular.ttf'); \
  format('truetype'); \
} \
.sc-accent-font { \
  font-family: 'Anton', Helvetica, sans-serif; \
  letter-spacing: 2px; \
} \
.sc-outer-box { \
  background-color: #723d46; \
  width: 500px; \
  height: 350px; \
  margin-top: 0px; \
  z-index: 2147483646; \
  display: none; \
  margin: 40px; \
  left: 50%; \
  top: 50%; \
  transform: translate(-50%, -50%); \
} \
.sc-inner-box { \
  background-color: #e26e5c; \
  width: 470px; \
  height: 320px; \
  position: relative; \
  top: 15px; \
  margin-right: 15px; \
  margin-left: 15px; \
} \
.sc-exit-button { \
  width: 30px; \
  height: 30px; \
  background-color: #d5b941; \
  position: relative; \
  left: 430px; \
  top: 10px; \
} \
#sc-exit-button-x { \
  font-family: 'Anton', Helvetica, sans-serif; \
  font-size: 30px; \
  color: #723d46; \
  font-weight: bold; \
  text-align: center; \
} \
.sc-modal-text { \
  font-family: 'Helvetica'; \
  color: #472d30; \
  margin-left: 20px; \
  position: relative; \
  top: 0px; \
} \
.sc-modal-text h1 { \
  font-style: italic; \
  font-weight: bold; \
  font-size: 52px; \
  letter-spacing: 3px; \
  position: relative; \
  top: 0px; \
} \
.sc-modal-text h3 { \
  font-style: italic; \
  font-size: 20px; \
} \
.sc-highlight-box { \
  width: 200px; \
  height: 50px; \
  border-radius: 5px; \
  background-color: #d5b941; \
  display: flex; \
  justify-content: center; \
  align-items: center; \
  margin: auto; \
  position: relative; \
  top: 0px; \
} \
.sc-results-text { \
  display: flex; \
  justify-content: center; \
  position: relative; \
  top: 0px; \
} \
</style>";

var maxTime = 5000;
var intervalTime = 1000;
var currentTime = 0;
var calculateScroll;
var displayResultsTimerID;
var currentPosition;
var totalPixelsScrolled;
var feetPerPixel = 0.00086805544619423;

// Scroll calculator with 1 second interval timer
function calculateScroll() {
    var newPosition = window.pageYOffset;
    var intervalPixelsScrolled = Math.abs(newPosition - currentPosition);
    totalPixelsScrolled += intervalPixelsScrolled;
    currentPosition = newPosition;
}

// Results Modal display wth a 5 minute timer
function displayResults() {
  clearInterval(checkTimerID);
  //display:block and position:fixed
  $(".sc-outer-box").css({"display": "block", "position": "fixed"});
  var totalFeetScrolled = Math.round(totalPixelsScrolled * feetPerPixel);
  var totalFeetScrolledString = String(totalFeetScrolled);
  $("#sc-results-number").text(totalFeetScrolledString + " feet");
  $(document).on("click", "#sc-exit-button-x", function() {
    $(".sc-outer-box").css("display", "none");
  });
}


$("body").append(createButton);
$("head").append(modalCSS);
$("body").append(modalHTML);
$(document).on("click", "#sc-start-button", function() {
  currentPosition = window.pageYOffset;
  totalPixelsScrolled = 0;
  checkTimerID = setInterval(calculateScroll, intervalTime);
  displayResultsTimerID = setTimeout(displayResults, maxTime);
});
