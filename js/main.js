function getQueryStringParams(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split("&");

	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split("=");
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

$(document).ready(function () {
	$(".fancybox").fancybox();
});

$(window).on("load", function () {
	var msnry = new Masonry( ".grid", {
		itemSelector: ".grid-item",
		fitWidth: true
	});

	if (getQueryStringParams('submit') === "success") {
		$(".success").css("display", "block");
	}

	// Auto-scrolling photo gallery with back-and-forth motion
	const photoContainer = document.querySelector('.photo-scroll-container');
	if (photoContainer) {
		const photoScroll = photoContainer.querySelector('.photo-scroll');
		let isUserInteracting = false;
		let scrollPosition = 0;
		let scrollDirection = 1; // 1 for right, -1 for left
		const scrollSpeed = 0.5; // pixels per frame
		const pauseDuration = 3000; // pause for 3 seconds after user interaction

		function autoScroll() {
			if (!isUserInteracting) {
				// Update scroll position
				scrollPosition += scrollSpeed * scrollDirection;
				
				// Get the maximum scroll position
				const maxScroll = photoScroll.scrollWidth - photoContainer.clientWidth;
				
				// Reverse direction when reaching either end
				if (scrollPosition >= maxScroll) {
					scrollPosition = maxScroll;
					scrollDirection = -1; // Start scrolling left
				} else if (scrollPosition <= 0) {
					scrollPosition = 0;
					scrollDirection = 1; // Start scrolling right
				}
				
				photoContainer.scrollLeft = scrollPosition;
			}
			requestAnimationFrame(autoScroll);
		}

		// Start auto-scrolling
		requestAnimationFrame(autoScroll);

		// Pause on user interaction
		let pauseTimeout;
		
		photoContainer.addEventListener('touchstart', () => {
			isUserInteracting = true;
			clearTimeout(pauseTimeout);
		});

		photoContainer.addEventListener('touchend', () => {
			pauseTimeout = setTimeout(() => {
				scrollPosition = photoContainer.scrollLeft;
				isUserInteracting = false;
			}, pauseDuration);
		});

		photoContainer.addEventListener('mouseenter', () => {
			isUserInteracting = true;
			clearTimeout(pauseTimeout);
		});

		photoContainer.addEventListener('mouseleave', () => {
			pauseTimeout = setTimeout(() => {
				scrollPosition = photoContainer.scrollLeft;
				isUserInteracting = false;
			}, pauseDuration);
		});

		photoContainer.addEventListener('scroll', () => {
			if (!isUserInteracting) return;
			scrollPosition = photoContainer.scrollLeft;
		});
	}
});
