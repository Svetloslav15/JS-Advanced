const expect = require("chai").expect;
const isOddOrEven = require("../02. Odd or Even").isOddOrEven;

describe("EvenOrOdd", function () {
    describe("Even", function () {
        it('should return even for hell', function () {
            let result = isOddOrEven("hell");
            expect(result).to.be.equal("even");
        });
    });
    describe("Error", function () {
        it('should return odd for 5', function () {
            let result = isOddOrEven(5);
            expect(result).to.be.equal(undefined);
        });
    });
    describe("Odd", function () {
        it('should return odd for hello', function () {
            let result = isOddOrEven("hello");
            expect(result).to.be.equal("odd");
        });
    });
});