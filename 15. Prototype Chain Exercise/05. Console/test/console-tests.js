const expect = require("chai").expect;
const Console = require("../console");

describe("Console WriteLine tests", function () {
    it('should return "Hello World"', function () {
        expect(Console.writeLine("Hello World")).to.be.equal("Hello World");
    });
    it('should return nothing', function () {
        expect(Console.writeLine(89)).to.be.undefined;
    });
    it('should return an object', function () {
        let obj = {name: "Stamat", age: 16};
        let expectedResult = JSON.stringify(obj);
        expect(Console.writeLine(obj)).to.be.equal(expectedResult);
    });
    it('should throw TypeError', function () {
        expect(() => Console.writeLine(89, "text")).to.throw(TypeError);
    });
    it('should not throw error', function () {
        let string = "My name is {0} and I am {1} years old!";
        expect(Console.writeLine(string, "Svetli", 16)).to.be.equal("My name is Svetli and I am 16 years old!");
    });
    it('should throw RangeError', function () {
        let string = "My name is {0}";
        expect(() => Console.writeLine(string, "Svetli", 15)).to.throw(RangeError);
    });
    it('should throw RangeError', function () {
        let string = "My name is {0} on {0} years from {2}";
        expect(() => Console.writeLine(string, "Svetli", 15)).to.throw(RangeError);
    });
    it("should recognize the placeholder numbers well", function () {
        expect(() => Console.writeLine("Not {10}", "valid")).to.throw(RangeError);
    });
    it('should be valid', function () {
        let string = "Hello {0}, {0}!";
        expect(() => Console.writeLine(string, "Nikol", "Kali")).to.throw(RangeError);
    });
});