(function(){
	var assert  = require("assert");
	var sinon = require("sinon");

	// bdd style
	describe('Test framework.', function(){
		it('can run a unit test', function(){
			assert.equal(1, 1);	
		});
	});

	describe('A realm: ', function(){
		var realm;
		beforeEach(function(done){
			var Realm= require('../realm.js');	
			realm = new Realm();
			done();
		});

		it('can call Tick() method', function(){

			realm.Tick();
		});

		it('can add cells to realm', function(){
			var Cell = require('../cell.js');
			var cell = new Cell();
			realm.Add(cell);
		});

		it('realm.Tick calls Tick on cells added to realm', function(){
			var Cell = require('../cell.js');
			var cell = new Cell();
			realm.Add(cell);
			var tick = sinon.spy()
			cell.Tick = tick;
			realm.Tick();
			assert(tick.calledOnce);
		});

	});
})();
