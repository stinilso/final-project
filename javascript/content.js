
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

/*jshint multistr: true */
var modalHTML = "<!-- Outer box color --> \
    <div class='sc-outer-box'> \
      <!-- Inner box color --> \
      <div class='sc-inner-box'> \
        <!-- Button to close modal --> \
        <div class='sc-exit-button'> \
        </div> \
        <!-- Popup text --> \
        <div class='sc-modal-text'> \
          <h3 class='sc-accent-font'>The Scroll Calculator</h3> \
          <h1>Results</h1> \
          <p class='sc-results-text'>You have scrolled approximately</p> \
          <div class='sc-highlight-box'> \
            <h2 id='sc-results-number'>some number</h2> \
          </div> \
          <p class='sc-results-text'>in the last 5 minutes!</p> \
        </div> \
      </div> \
    </div>";

/*jshint multistr: true */
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
  top: 50px; \
  right: 50px; \
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
  width: 25px; \
  height: 25px; \
  background-color: #d5b941; \
  position: relative; \
  left: 435px; \
  top: 10px; \
} \
.sc-modal-text { \
  font-family: 'Helvetica'; \
  color: #472d30; \
  margin-left: 20px; \
  position: relative; \
  top: -30px; \
} \
.sc-modal-text h1 { \
  font-style: italic; \
  font-weight: bold; \
  font-size: 52px; \
  letter-spacing: 3px; \
  position: relative; \
  top: -20px; \
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
  top: -5px; \
} \
.sc-results-text { \
  display: flex; \
  justify-content: center; \
  position: relative; \
  top: -5px; \
} \
</style>";

var maxTime = 5000;
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
    totalFeetScrolled = Math.round(totalPixelsScrolled * feetPerPixel);
    currentPosition = newPosition;
}

// 5 minute timer
function displayResults() {
  clearInterval(checkTimerID);
  alert("You have scrolled " + totalFeetScrolled + " feet in the past 10 seconds.");
  //display:block and position:fixed
  $(".sc-outer-box").css({"display": "block", "position": "fixed"});
}


$("body").append(createButton);
$("head").append(modalCSS);
console.log("CSS added");
$("body").append(modalHTML);
$(document).on("click", "#sc-start-button", function() {
  //alert("test");
  checkTimerID = setInterval(calculateScroll, intervalTime);
  displayResultsTimerID = setTimeout(displayResults, maxTime);
  currentPosition = window.pageYOffset;
  totalPixelsScrolled = 0;
});
