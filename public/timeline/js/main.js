$(function(){
	
	$('.tofade').waypoint(function(direction) {

		$(this).removeClass('tofade');
		$(this).waypoint('destroy');

	}, { offset: '90%' });
	
});