var OldClock = (function(){

	var parent = Clock;
	var that = this;
	var firstDisplay = 0;
	

	var creatClock = function(id){
		var canvas = document.getElementById(id);
		
		this.ctx = canvas.getContext("2d");
		this.radius = canvas.height / 2;
		this.ctx.translate(this.radius, this.radius);
		this.radius = this.radius * 0.90;
	};
	
	
	var display = function(date , id){
		if(!firstDisplay)
			creatClock(id);
		
		firstDisplay++;

		ctx = that.ctx;
		radius = that.radius;

		setOldClock(ctx, radius, date);
	};

	var setOldClock = function(ctx, radius, date) {
		drawFace(ctx, radius);
		drawNumbers(ctx, radius);
		drawTime(ctx, radius, date);
	};

	var drawTime = function(ctx, radius, date){
		var hour = date.hours;
		var minute = date.minutes;
		var second = date.seconds;
		//hour
		hour=hour%12;
		hour=(hour*Math.PI/6)+
		(minute*Math.PI/(6*60))+
		(second*Math.PI/(360*60));
		drawHand(ctx, hour, radius*0.5, radius*0.07);
		//minute
		minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
		drawHand(ctx, minute, radius*0.8, radius*0.07);
		// second
		second=(second*Math.PI/30);
		drawHand(ctx, second, radius*0.9, radius*0.02);
	};

	var drawFace = function(ctx, radius) {
		var grad;

		if(ctx){
			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, 2*Math.PI);
			ctx.fillStyle = 'white';
			ctx.fill();
			grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
			grad.addColorStop(0, '#333');
			grad.addColorStop(0.5, 'white');
			grad.addColorStop(1, '#333');
			ctx.strokeStyle = grad;
			ctx.lineWidth = radius*0.1;
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
			ctx.fillStyle = '#333';
			ctx.fill();
		}
	};

	var drawNumbers = function(ctx, radius) {
		var ang;
		var num;
		if(ctx){
			ctx.font = radius*0.15 + "px arial";
			ctx.textBaseline="middle";
			ctx.textAlign="center";
			for(num = 1; num < 13; num++){
				ang = num * Math.PI / 6;
				ctx.rotate(ang);
				ctx.translate(0, -radius*0.85);
				ctx.rotate(-ang);
				ctx.fillText(num.toString(), 0, 0);
				ctx.rotate(ang);
				ctx.translate(0, radius*0.85);
				ctx.rotate(-ang);
			}
		}
	};

	var drawHand = function(ctx, pos, length, width) {
		if(ctx){
			ctx.beginPath();
			ctx.lineWidth = width;
			ctx.lineCap = "round";
			ctx.moveTo(0,0);
			ctx.rotate(pos);
			ctx.lineTo(0, -length);
			ctx.stroke();
			ctx.rotate(-pos);
		}
	};

	return{
		creatClock:creatClock,
		display:display
	}

})();