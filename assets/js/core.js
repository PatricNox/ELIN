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

/* Variables 
 ******************/
let OptionIsOpen = false;

/* Helper functions 
 ******************/

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

    // Actipn
    (OptionIsOpen) ? options.style.marginTop = "0" : options.style.marginTop = "-10%";
    key.style.transform = rotateValue;

})
