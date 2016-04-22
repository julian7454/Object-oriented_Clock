var ClockModel = (function(){
	var timeData = {
		hours : new Date().getHours(),
		minutes : new Date().getMinutes(),
		seconds : new Date().getSeconds()
	};

	var getTimeData = function(){
		return(timeData);
	};

	var setTimeData = function(time){

		time = time || new Date();
		
		timeData.hours = time.getHours(),
		timeData.minutes = time.getMinutes(),
		timeData.seconds = time.getSeconds()
	};

	return {
		timeData:timeData,
		getTimeData:getTimeData,
		setTimeData:setTimeData 
	}
})();

