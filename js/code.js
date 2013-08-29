$(document).ready(function(){
		$('#slider-code .overview li').append("<img src=\"img/carousel-bg.png\" class=\"carousel-bg\" /> ");
		
		$('.search').hide();

		$('#slider-code').tinycarousel({controls: true});	
		$('#counter').countdown({until: new Date("September 10, 2013 10:00:00"),format: 'DHMS'});
		
		$('.overview a').mouseover(function() {
		  $(this).children('div').css({ border: '2px solid #EAAB04' });
		  $(this).children('div').children('.search').show();
		}).mouseout(function() {
		  $(this).children('div').css({ border: '2px solid white' });
		  $('.search').hide();
		});
		
});