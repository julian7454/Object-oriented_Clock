var Clock = (function(){


 	var display = function(date){
 		
 		$('#Clock').html(date.hours + ':' + date.minutes + ':'+ date.seconds );
 	}

	
	return{
		clockInit:clockInit,
		display:display
	}
})();



