$(document).ready(function() {

	setTimeout(function() {
    $('#fullpage').css("-webkit-filter", "blur(5px)")
  }, 200);
  setTimeout(function() {
    $('#fullpage').css("-webkit-filter", "blur(4px)")
  }, 400);
  setTimeout(function() {
    $('#fullpage').css("-webkit-filter", "blur(3px)")
  }, 600);
  setTimeout(function() {
    $('#fullpage').css("-webkit-filter", "blur(2px)")
  }, 800);
  setTimeout(function() {
    $('#fullpage').css("-webkit-filter", "blur(1px)")
  }, 1000);
   setTimeout(function() {
    $('#fullpage').css("-webkit-filter", "blur(0px)")
  }, 1200);

	var hellos = setTimeout(function() {
	  $("#hi").fadeIn(1500);
	  $("#hi").fadeOut(100);
	  $("#im").fadeIn(2500);
	  $("#im").fadeOut(100);
	  $("#clare").fadeIn(4000);
	  1000
	});

	$('div.section').first();

	$('a.display').on('click', function(e) {
    e.preventDefault();

      var t = $(this).text(),
      that = $(this);

    if (t === 'next' && $('.current').next('div.section').length > 0) {
        var $next = $('.current').next('.section');
        var top = $next.offset().top;
        
        $('.current').removeClass('current');
      
        $('body').animate({
          scrollTop: top     
        }, function () {
               $next.addClass('current');
        });
  } else if (t === 'prev' && $('.current').prev('div.section').length > 0) {
        var $prev = $('.current').prev('.section');
        var top = $prev.offset().top;
        
        $('.current').removeClass('current');
      
        $('body').animate({
          scrollTop: top     
        }, function () {
               $prev.addClass('current');
        });
  } 
});

});
