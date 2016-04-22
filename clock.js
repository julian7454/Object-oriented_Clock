var Clock = (function(){

	var creatClock = function(id){};

 	var display = function(date , id){

 		var that = this;

 		$('#' + id).html(date.hours + ':' + date.minutes + ':'+ date.seconds );
 	}

	
	return{
		creatClock:creatClock,
		display:display
	}
})();



