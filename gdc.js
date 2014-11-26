(function(){
	// conways game of life

	var Cell = function(opts){
		var itsAlive = true;

		opts=opts||{};
		if(opts.dead!=null){
			itsAlive = !opts.dead;
		}
		var neighbors = [exports.Left,
						exports.TopLeft,
						exports.Top,
						exports.TopRight,
						exports.Right,
						exports.BottomRight,
						exports.Bottom,
						exports.BottomLeft];
		var neighborCount = function(){
			var c=0;
			if(exports.Left) c+=1;
			if(exports.TopLeft) c+=1;
			if(exports.Top) c+=1;
			if(exports.TopRight) c+=1;
			if(exports.Right) c+=1;
			if(exports.BottomRight) c+=1;
			if(exports.Bottom) c+=1;
			if(exports.BottomLeft) c+=1;
			return c;
		}

		function Tick(){
			var count = neighborCount();
			console.log("count before="+count + " itsAlive=" + itsAlive);
			switch(count){
				case 2:
				case 3:
					console.log("case 3");
					if(!itsAlive){
						resurect();	
					console.log("resurect");
					}
				break;	
				default:
					die();
				break;
			}
			console.log("count after="+count + " itsAlive=" + itsAlive);
		}

		exports = {
			Tick : Tick,
			Left : false,
			TopLeft : false,
			Top: false,
			TopRight : false,
			Right : false,
			BottomRight : false,
			Bottom : false, 
			BottomLeft : false,
			isAlive: function(){
				return itsAlive;
			}
		};

		function resurect(){
			console.log("resurect");
			itsAlive = true;
		};	

		function die(){
			console.log("die");
			itsAlive = false;
		};

		return exports;
	};
module.exports = Cell;
	
})();
