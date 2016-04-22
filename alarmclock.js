function AlarmClock(){

	// var id = this.id || 'AlarmClock' ;
	//var id = this.id;

	this.displayTime = function(id , date){
		//id =this.id;
		$('#' + id).html(date.hours +':'+date.minutes +':'+ date.seconds );
		
	}
};

AlarmClock.prototype = new Clock_fn;
var AlarmClock = new AlarmClock();
