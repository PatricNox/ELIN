 /************************/
 /*                      */
 /*        ELIN          */
 /*   Another countdown  */
 /*                      */
 /************************/
 /* Github.com/PatricNox */


/* Declarations 
 ******************/
const btn = document.querySelector('.btn');
const date = document.querySelector('#date');

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
