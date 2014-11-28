(function(){
/*
	var assert = require("assert")

	assert.fail(actual, expected, message, operator)
	assert(value, message), assert.ok(value, [message])
	assert.equal(actual, expected, [message])
	assert.notEqual(actual, expected, [message])
	assert.deepEqual(actual, expected, [message])
	assert.notDeepEqual(actual, expected, [message])
	assert.strictEqual(actual, expected, [message])
	assert.notStrictEqual(actual, expected, [message])
	assert.throws(block, [error], [message])
	assert.doesNotThrow(block, [message])
	assert.ifError(value)
*/
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
