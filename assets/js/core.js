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
const counter = document.querySelector('#timer');
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
    if (dimension.matches) { // If media query matches.
        device = "COMPUTER";
    } else {
        device = "PHONE";
    }
}
  
  var dimension = window.matchMedia("(min-width: 700px)")
  getDevice(dimension) // Call listener function at run time.
  dimension.addListener(getDevice) // Attach listener function on state changes.

  // Put chosen date into our timer, wooooOOoOoO!
  btn.addEventListener('click', (e) => {
    e.preventDefault(); // It's a form, don't execute action.
    clearTimer(timer);
    startTimer(date.value);
    ToggleSettingsBox();
})

// parse a date in yyyy-mm-dd format
function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    return new Date(parts[2], parts[0]-1, parts[1]); // months are 0-based.
}

// Toggler for settingbox
function ToggleSettingsBox() {
    // Declare state
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
}

function getCookie(cname) {
    return(document.cookie.split('=')[1]);
  }
  
function clearTimer(timer) {
    clearInterval(timer);
    document.cookie = 'timer=; Max-Age=-99999999;';  
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
    ToggleSettingsBox();
})

/** Countdown..er?  **/
/*********************/

var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7);

function startTimer(EndDate) {
    DisplayTimer(true);
    timer = setInterval(function() {
        timeBetweenDates(EndDate);
      }, 1000);
}

function timeBetweenDates(toDate) {
    if (! document.cookie)
        document.cookie = "timer="+toDate+"; expires="+toDate+" path=/;";
    console.log(getCookie(timer))
    toDate = parseDate(getCookie(timer));
    let now = new Date(); // Reset previous timer, if any.
    let difference = toDate.getTime() - now.getTime();

    if (difference <= 0) {
        // Timer done, reset!
        clearTimer(timer);
        DisplayTimer(false);
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


/** Hide timer if nothing to count */
function DisplayTimer(bool) {
    setTimeout(() => {
        if (!bool) {
            counter.style.marginLeft = "60%";
            counter.style.opacity = 0;
            return;
        }
      
        counter.style.marginLeft = "0";
        counter.style.opacity = 1;
    }, 250);

}

/** Check if there is an existing counter */
window.onload = function() {
    if (document.cookie) {
        startTimer(parseDate(document.cookie));
        date.value = (getCookie(timer));
    }
};
