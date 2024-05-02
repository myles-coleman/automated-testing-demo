const { test, addTwo, multTwo, subTwo, divTwo, expTwo } = require('../simple.js');

describe('App', function() {
    it('test should return 1', function() {
        expect(test()).toBe(1);
    });
    it('addTwo should return 4', function() { // Addition
        expect(addTwo(2, 2)).toBe(4);
    });
    it('multTwo should return 6', function() { // Multiplication
        expect(multTwo(2, 3)).toBe(6);
    });
    it('subTwo should return 2', function() { // Subtraction
        expect(subTwo(4, 2)).toBe(2);
    });
    it('divTwo should return 0', function() { // Division by 0
        expect(divTwo(4, 0)).toBe(0);
    });
    it('divTwo should return 2', function() { // Division
        expect(divTwo(4, 2)).toBe(2);
    });

    // expTwo Unit Tests
    it('expTwo should return 4', function() { // Exponentiation
        expect(expTwo(2, 2)).toBe(4);
    });
    it('expTwo should return 1', function() { // Exponentiation with power of 0
        expect(expTwo(2, 0)).toBe(1);
    });
});
