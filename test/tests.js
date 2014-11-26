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

	// bdd style
	describe('Test framework.', function(){
		it('can run a unit test', function(){
			assert.equal(1, 1);	
		});
	});
	describe('A Cell: ', function(){
		var cell;
		beforeEach(function(done){
			var Cell= require('../gdc.js');	
			cell = new Cell();
			done();
		});

		it('can call Tick() method', function(){
			cell.Tick();
		});

		it('is able to set and read adjacent', function(){
			cell.Left = true;
			assert.equal(cell.Left, true);
			cell.TopLeft = true;
			assert.equal(cell.TopLeft, true);
			cell.BottomLeft = true;
			assert.equal(cell.BottomLeft, true);
			cell.Top = true;
			assert.equal(cell.Top, true);
			cell.Bottom = true;
			assert.equal(cell.Bottom, true);
			cell.TopRight= true;
			assert.equal(cell.Bottom, true);
			cell.Right= true;
			assert.equal(cell.Right, true);
			cell.BottomRight = true;
			assert.equal(cell.BottomRight, true);
		});


		it('is dead if it has <3 neighbors after Tick', function(){
			cell.Tick();
			assert.equal(cell.isAlive(), false);
		});

		it('is alive before Tick', function(){
		var alive = cell.isAlive();
			assert.equal(alive, true);
		});
		it('has 1 neighbor after Tick it should be dead', function(){
			cell.Top = true;
			cell.Tick();
			assert.equal(cell.isAlive(), false);
		});

		it('has 3 neighbors after Tick it should be alive ', function(){
			cell.Top = true;
			cell.TopLeft = true;
			cell.TopRight = true;
			cell.Tick();
			assert.equal(cell.isAlive(), true);
		});
		it('has 2 neighbors after Tick it should be alive ', function(){
			cell.Top = true;
			cell.Bottom = true;
			cell.Tick();
			assert.equal(cell.isAlive(), true);
		});
		it('has 4 neighbors after Tick it should be dead', function(){
			cell.TopLeft = true;
			cell.TopRight = true;
			cell.Bottom = true;
			cell.BottomRight = true;
			cell.Tick();
			assert.equal(cell.isAlive(), false);
		});
		it('can be initialized to dead', function(){
			var Cell= require('../gdc.js');	
			cell = new Cell({dead:true});
			assert.equal(cell.isAlive(), false);
		});
		it('will resurect if it has 3 live neighbors', function(){
			var Cell= require('../gdc.js');	
			cell = new Cell({dead:true});
			assert.equal(cell.isAlive(), false);
			cell.Top = true;
			cell.Bottom = true;
			cell.Left = true;
			cell.Tick();
			assert.equal(cell.isAlive(), true);
			
		});

	});
})();
