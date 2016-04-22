var ClockView = (function(){
	
	// var render = function(id , date){
	// 	$('#' + id).html(date.getHours()+':'+ date.getMinutes() +':'+ date.getSeconds());
	// };
	var render = function(){
		console.log( Clock.getValue());
	}


	return{
		render:render
	}
})();