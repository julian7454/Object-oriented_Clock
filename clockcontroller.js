var ClockController = (function(){
	
	
	var init = function(){

		var that = this;

		Clock.clockInit();
		that.loadTime();

	};

	var loadTime = function(){
		
		var that = this;
		
		var timeData = ClockModel.getTimeData();
		that.clockSetInterval();

		that.creatView(timeData);


	};


	var updateTimer = function(){

		var that = this;

		ClockModel.setTimeData( new Date() );
		that.loadTime();

	};

	var clockSetInterval = function(){

		var that = this;

		setInterval(function(){
			
			that.updateTimer();

		},1000);
	};

	var creatView = function(date){
		Clock.display(date);
		//console.log(data);
		
	};

	return{
		init:init,
		loadTime:loadTime,
		clockSetInterval : clockSetInterval,
		updateTimer : updateTimer,
		creatView : creatView
	
	}
})();

