/* ---------------------------
 | This it for the body of the page
 | -gio
 | ---------------------------*/

ready();

function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
      // document ready

      let navbarHeight = $('#header').height();/* document.getElementById('header').style.height; */
      console.log(navbarHeight);
      document.querySelectorAll('.body-content')[0].style.marginTop = (navbarHeight+30) + "px"; 
      afterReadyFunction();
    }
  }
  
function afterReadyFunction() {
  console.log(window.innerHeight);
  let total_height = window.innerHeight;
  let contact_us = $('.intro-contact').height();
  let header = $('.mirror-header').height();
  console.log(contact_us);
  console.log(header);

  let intro_img = total_height - (contact_us + header);
  $('.intro-front').attr('style','height: '+intro_img+'px!important');
}