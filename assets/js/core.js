 /************************/
 /*                      */
 /*        ELIN          */
 /*   Another countdown  */
 /*                      */
 /************************/
 /* Github.com/PatricNox */


/* Declarations 
 ******************/
const btn     = document.querySelector('.btn');
const date    = document.querySelector('#date');
const key     = document.querySelector('.hideKey');
const options = document.querySelector('.bootstrap-iso');
let device  = null;
let timer;

/* Variables 
 ******************/
let OptionIsOpen = false;

/* Helper functions 
 ******************/
function getDevice(dimension) {
    if (dimension.matches) { // If media query matches
        device = "COMPUTER";
    } else {
        device = "PHONE";
    }
}
  
  var dimension = window.matchMedia("(min-width: 700px)")
  getDevice(dimension) // Call listener function at run time
  dimension.addListener(getDevice) // Attach listener function on state changes

  // Put chosen date into our timer, wooooOOoOoO!
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // It's a form, don't execute action.
    startTimer(parseDate(date.value));
})

// parse a date in yyyy-mm-dd format
function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[2], parts[0]-1, parts[1]); // months are 0-based
}

/* Let's programme! 
 ******************/
$(document).ready(function(){
    var date_input=$('input[name="date"]'); 
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
    };
    date_input.datepicker(options);
  })

key.addEventListener('click', (e) => {
    // Delcare state
    OptionIsOpen = !OptionIsOpen;
    let rotateValue = (OptionIsOpen) ? "rotate(180deg)" : "rotate(0)";

    // Declare margin depending on device
    let percent = 0;
    switch (device) {
        case "COMPUTER":
             percent = "-10%"
            break;
        case "PHONE":
        default:
             percent = "-40%"
            break;
    }

    // Actipn
    (OptionIsOpen) ? options.style.marginTop = "0" : options.style.marginTop = percent;
    key.style.transform = rotateValue;

})

/** Countdown..er?  **/
/*********************/

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7); //just for this demo today + 7 days

function startTimer(EndDate) {
    clearInterval(timer);
    timer = setInterval(function() {
        timeBetweenDates(EndDate);
      }, 1000);
}

function timeBetweenDates(toDate) {
    let now = new Date(); // Reset previous timer, if any.
    let difference = toDate.getTime() - now.getTime();

    if (difference <= 0) {
        // Timer done.
        clearInterval(timer);
    } 
    
    else {
        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours   %= 24;
        minutes %= 60;
        seconds %= 60;

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
    }
}
