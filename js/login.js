$(document).ready(function() {
	$('.header__login').click(function(){
		$('.header__login').toggleClass('active');
		$('.header__buttons').toggleClass('active');
		$('.header__menu').hide();
		$('.header__buttons').show();
	});
	});
