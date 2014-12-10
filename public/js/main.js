$(function(){
	
	$('.tofade').waypoint(function(direction) {
		//if(direction==='down')
		//{
			//console.log(this);
				$(this).removeClass('tofade');
		//}
		//  $(this).toggleClass('tofade', direction === 'down');
		//}, {
		  //offset: '50%',
		//});
	}, { offset: '80%' });
	
});