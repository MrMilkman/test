'use strict';

$(document).ready(function() {
	$('li:eq(7), .main_btna, .main_btn').on('click', function(event) {
		event.preventDefault();
		$('.overlay').animate( {
			opacity: 'show'
		});
		$('.modal').slideDown("slow");
		
	});
	$('.close').on('click',function() {
		$('.modal').slideUp("slow");
		    $('.overlay').animate( {
			opacity: 'hide'
		});
	});
});