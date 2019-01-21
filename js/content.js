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
    }
  }
  
  