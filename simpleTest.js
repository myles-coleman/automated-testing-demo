const assert = require('chai').assert;
const test = require('./simple.js').test;
const addTwo = require('./simple.js').addTwo;
const multTwo = require('./simple.js').multTwo;
const subTwo = require('./simple.js').subTwo;
const divTwo = require('./simple.js').divTwo;
const expTwo = require('./simple.js').expTwo;

describe('App', function() {
    it('test should return 1', function(){
        assert.equal(test(), 1);
    });
    it('addTwo should return 4', function(){ //addition
        assert.equal(addTwo(2,2), 4);
    });
    it('multTwo should return 6', function(){ //multiplication
        assert.equal(multTwo(2,3), 6);
    });
    it('subTwo should return 2', function(){ //subtraction
        assert.equal(subTwo(4,2), 2);
    });
    it('divTwo should return 0', function(){ //division by 0
        assert.equal(divTwo(4,0), 0);
    });
    it('divTwo should return 2', function(){ //division
        assert.equal(divTwo(4,2), 2);
    });
    it('expTwo should return 16', function(){ //exponentiation
        assert.equal(expTwo(4,2), 16);
    });
});