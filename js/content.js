/* ---------------------------
 | This it for the body of the page
 | -gio
 | ---------------------------*/

ready();
AOS.init({
  duration: 1200,
})


function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
      // document ready

      let navbarHeight = $('#header').height();/* document.getElementById('header').style.height; */
      console.log(navbarHeight);
      document.querySelectorAll('.body-content')[0].style.marginTop = (navbarHeight+30) + "px"; 
      afterReady();
    }
  }

function afterReady() {
  console.log('ready');

  let windowSize = window.innerHeight;
  let header = document.getElementById('mirror-header').clientHeight;//$('.mirror-header').outerHeight();
  let contactArea = document.getElementById('intro-contact').clientHeight;

  console.log('windowSize: '+windowSize);
  console.log('header: '+header);
  console.log('contactArea: '+contactArea);

  let actualSize = windowSize - (header + contactArea);
  console.log('actualSize: '+actualSize);
  $('.intro-front').css('height', actualSize+'px');
}
  