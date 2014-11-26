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
//console.log(neighbors);
			var c=0;
			for(var i=0;i<neighbors.length;i++){
				if(neighbors[i]){
					c+=1;
				}
			}
			return c;
		}

		function Tick(){
			var count = neighborCount();
			console.log("count="+count + " itsAlive=" + itsAlive);
			switch(count){
				case 2:
					// noop
					break;
				case 3:
					if(!itsAlive){
						resurect();	
					}
				break;	
				default:
					die();
				break;
			}
			console.log("count="+count + " itsAlive=" + itsAlive);
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
			itsAlive = true;
		};	

		function die(){
			itsAlive = false;
		};

		function setTop(value){
			top = value;
		}

		return exports;
	};
module.exports = Cell;
	
})();
