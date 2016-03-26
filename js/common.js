$(document).ready(function() {

	$(".carousel").carousel({
		interval: 3000
	});

// Dropdown button option
	$('.dropdown-select').on( 'click', '.dropdown-menu li', function() { 
	   var target = $(this).html();

	   //Adds active class to selected item
	   $(this).parents('.dropdown-menu').find('li').removeClass('active');
	   $(this).parent('li').addClass('active');

	   //Displays selected text on dropdown-toggle button
	   $(this).parents('.dropdown-select').find('.dropdown-toggle').html(target + '<span class="caret caret-select"></span>');
	});

// CustomScrollbar for dropDownMenu
	$(".dropdown-custom").mCustomScrollbar({
		theme: "dark"
	});

// jqBootstrapValidation
	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation()

// Slider
	var owl = $(".slider")
		owl.owlCarousel({
			loop: "true",
			items: 1,
			nav: true,
			navText: "",
	});
		$(".next").click(function(){
			owl.trigger("next.owl.carousel");
		})
		$(".prev").click(function(){
			owl.trigger("prev.owl.carousel")
		})
});