var ClockController = (function(){

	var clocks = [];

	
	var addClock = function(clock){
		clocks.push(clock);
	};
	
	
	var init = function(){

		var that = this;

		//Clock.clockInit();
		that.loadTime();
		that.clockSetInterval();


	};

	var loadTime = function(){
		
		var that = this;
		
		var timeData = ClockModel.getTimeData();
		

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
		
		for (index in clocks)		
  		clocks[index].name.display(date, clocks[index].id );
		
	};

	return{
		init:init,
		loadTime:loadTime,
		clockSetInterval : clockSetInterval,
		updateTimer : updateTimer,
		creatView : creatView,
		addClock : addClock
	
	}
})();

