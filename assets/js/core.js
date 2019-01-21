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
let   device  = null;

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

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(date.value);
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
