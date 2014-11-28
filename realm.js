(function(){
	var Realm = function(){
		var cells = [];
		exports = {
			Add : Add ,
			Tick : Tick
		};
		function Add(cell){
			cells.push(cell);
		};
		function Tick(){
			for(var i=cells.length-1; i>=0; i--){
				cells[i].Tick();
			}
		};
		return exports;
	};
	// conways game of life
	module.exports = Realm;
})();
