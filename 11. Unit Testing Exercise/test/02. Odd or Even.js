const expect = require("chai").expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

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