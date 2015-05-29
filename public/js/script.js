$(document).ready(function() {
	setTimeout(function() {
    $('#fullpage').css("-webkit-filter", "blur(5px)")
  }, 1);
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

	var joeVid = document.getElementById('joe');
	var apparelVid = document.getElementById('engapparel');
	var oodlsVid = document.getElementById('oodls');
	var sleazeVid = document.getElementById('sleaze');
	$(joeVid).hover(function() {
		$(this).css('opacity', '.3');
		$(this).get(0).pause();
		$('#joe-info').show();
	});
	$(joeVid).mouseout(function() {
		$(this).css('opacity', '1');
		$(this).get(0).play();
		$('#joe-info').hide();
	});
	$(apparelVid).hover(function() {
		$(this).css('opacity', '.3');
		$(this).get(0).pause();
		$('#apparel-info').show();
	});
	$(apparelVid).mouseout(function() {
		$(this).css('opacity', '1');
		$(this).get(0).play();
		$('#apparel-info').hide();
	});
	$(oodlsVid).hover(function() {
		$(this).css('opacity', '.3');
		$(this).get(0).pause();
		$('#oodls-info').show();
	});
	$(oodlsVid).mouseout(function() {
		$(this).css('opacity', '1');
		$(this).get(0).play();
		$('#oodls-info').hide();
	});
	$(sleazeVid).hover(function() {
		$(this).css('opacity', '.3');
		$(this).get(0).pause();
		$('#sleaze-info').show();
	});
	$(sleazeVid).mouseout(function() {
		$(this).css('opacity', '1');
		$(this).get(0).play();
		$('#sleaze-info').hide();
	});
});
