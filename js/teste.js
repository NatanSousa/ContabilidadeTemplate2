$(document).ready(function() {
	var stickyOffset = $('#Droba').offset().top;
	
	$(window).scroll(function(){
	  var sticky = $('#Droba'),
		  scroll = $(window).scrollTop();
	
	  if (scroll >= stickyOffset) sticky.addClass('Fixo');
	  else sticky.removeClass('Fixo');
	}); 
}); 