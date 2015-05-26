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

});