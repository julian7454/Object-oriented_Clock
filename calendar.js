var Calendar = (function(){
	var id;

	var startClock = function(now){
		$('#' + this.id).html(now.getYear()+'-'+ now.getDate()  );
	};

	var setId = function(id){
		this.id =id;
	}

	return {
		startClock : startClock,
		setId : setId
	}

})();