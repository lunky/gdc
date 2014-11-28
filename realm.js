(function(){
	var Realm = function(){
		exports = {
			Add : Add ,
			Tick : Tick
		};
		function Add(cell){
			console.log("Add");	
		};
		function Tick(){
			console.log("Tick");
		};
		return exports;
	};
	// conways game of life
	module.exports = Realm;
})();
