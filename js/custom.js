 $("#video1Modal").on('hidden.bs.modal', function(e) {
    $("#video1Modal iframe").attr("src", $("#video1Modal iframe").attr("src"));
  });
  $("#video1Modal2").on('hidden.bs.modal', function(e) {
    $("#video1Modal2 iframe").attr("src", $("#video1Modal2 iframe").attr("src"));
  });
  $("#video1Modal3").on('hidden.bs.modal', function(e) {
    $("#video1Modal3 iframe").attr("src", $("#video1Modal3 iframe").attr("src"));
  });
     
	 
	 (function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Dropdown menu Start here/	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  
	
  })(jQuery); 