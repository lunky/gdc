(function(){
	var Realm = function(){
		exports = {
			Tick : Tick
		}
		function Tick(){
			console.log("Tick");
		}
		return exports;
	};
	// conways game of life
	module.exports = Realm;
})();
