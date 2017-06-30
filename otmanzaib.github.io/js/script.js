$(document).ready(function() {
	// ------- SCROLL TO INFO SECTION
	$('.arrow').click(function () {
		$('html, body').animate({
			scrollTop: $('.info').offset().top
		},500);
	});

	$('.side').click(function () {
		$('html, body').animate({
			scrollTop: $('.works').offset().top
		},500);
	});

	// -------------- //
	$('body').onload(function() {
		$('body').fadeIn(1200)
	});
});
