var cbpAnimatedHeader = (function () {

	var docElem = document.documentElement,
		header = document.querySelector('.cbp-af-header'),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener('scroll', function (event) {
			if (!didScroll) {
				didScroll = true;
				setTimeout(scrollPage, 250);
			}
		}, false);
	}

	function scrollPage() {
		var sy = scrollY();
		if (sy >= changeHeaderOn) {
			// $(header).addClass('cbp-af-header-shrink');

			if (header.classList)
				header.classList.add('cbp-af-header-shrink');
			else
				header.className += ' ' + 'cbp-af-header-shrink';
		}
		else {
			// $(header).removeClass('cbp-af-header-shrink');

			if (header.classList)
				header.classList.remove('cbp-af-header-shrink');
			else
				header.className = header.className.replace(new RegExp('(^|\\b)' + 'cbp-af-header-shrink'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();