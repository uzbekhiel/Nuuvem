$(document).ready(function(){
		$('#slider-code').tinycarousel({controls: true});	
		$('#counter').countdown({until: new Date("September 10, 2013 10:00:00"),format: 'DHMS'});
		
		$('.border').mouseover(function() {
		  $(this).css({ border: '2px solid #EAAB04' });
		  $(this).append("<img src=\"img/search-img.png\" class=\"search\" /> ");
		}).mouseout(function() {
		  $(this).css({ border: '2px solid white' });
		  $('.search').remove();
		});
		
});