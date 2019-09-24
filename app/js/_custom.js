document.addEventListener("DOMContentLoaded", function() {

	$("img.lazy").lazyload(); 

});


$(function() {

/*	$(".main-slider").owlCarousel({
		navText: ["<i class='fal fa-angle-left'></i>","<i class='fal fa-angle-right'></i>"],
		nav: true,
		items: 1,
		loop: true,
		dotsSpeed: 700,
		navSpeed: 700,
		slideBy: 1,
		dots: true,
	});*/

	$('.humburger').click(function(){
		
		$('.humburger').toggleClass('is-active')

		$('header .menu').toggleClass('menu-active');

	});

	/* Regexp */
	$('.start-span').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+\s*)/, '<span>$1</span>'));
	});

	$('.end-span').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$(function () {  
    $('header nav li a').each(function () { 
        var location = window.location.href; 
        var link = this.href;  
        if(location == link) { 
            $(this).addClass('active');
        }
    });
});

});

$(window).on('load', function() {
	$("body").fadeIn("slow");
});

